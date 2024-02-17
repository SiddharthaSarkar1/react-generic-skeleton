import Card from "./components/Card/Card";
import Skeleton from "./components/Skeleton/Skeleton";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">React Skeleton</h1>
      <div className="flex justify-center items-center h-screen">
      <Card />
      <Skeleton />
      </div>
      
    </>
  );
}

export default App;
