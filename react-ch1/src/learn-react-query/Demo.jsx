import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api";
import TodoCard from "./components/TodoCard";

const Demo = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const [search, setSearch] = useState("");

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos", { search }],
    // staleTime: Infinity,
    //cacheTime: 0, //it will never cash a your data and it will always make afetch request no matter what.
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-7xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center text-2xl">
      <div className="m-2 p-2">
        <input
          className="border-black border bg-gray-200 py-3 px-1 rounded"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          className="bg-rose-600 m-5 rounded border-black border py-3 px-1"
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Demo;
