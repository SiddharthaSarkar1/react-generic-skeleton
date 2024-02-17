import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Skeleton from "./components/Skeleton/Skeleton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        React Skeleton
      </h1>
      <div className="flex justify-center items-center h-screen">
        {loading ? <Skeleton /> : <Card />}
      </div>
    </>
  );
}

export default App;
