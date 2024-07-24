import Button from "./mycomponents/ui/Button";

function App() {


  return (
    <>
      <Button>Click Me 1</Button>
      <Button variant="secondary">Click Me 2</Button>
      <Button variant="secondary" className="p-10 m-10 border border-black rounded-full">Click Me 3</Button>
    </>
  );
}

export default App;
