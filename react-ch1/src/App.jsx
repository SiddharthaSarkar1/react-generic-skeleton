import { useCounterStore } from "./learn-zustand/store";

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
