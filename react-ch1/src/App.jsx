import { useEffect } from "react";
import { useCounterStore } from "./learn-zustand/store";

//Accessing count outside the component
const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-green-100 flex justify-center items-center">
        <OtherComponent count={count} />
      </div>
    </>
  );
}

const OtherComponent = ({ count }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <div className="text-7xl font-bold m-1 p-1 text-center">{count}</div>

      <div>
        <button
          className="bg-rose-600 border border-rose-900 text-white m-2 p-3 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-sky-700 border border-sky-950 text-white m-2 p-3 rounded"
          onClick={incrementAsync}
        >
          IncrementAsync
        </button>
        <button
          className="bg-green-600 border border-green-900 text-white m-2 p-3 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
