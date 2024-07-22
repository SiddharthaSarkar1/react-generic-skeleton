import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./learn-react-query/Demo";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center">
      <button className="m-5 p-5 bg-green-300 border border-green-900 rounded font-bold" onClick={() => setShowDemo(!showDemo)}>ToggleDemo</button>
      </div>
      {showDemo && <Demo />}
    </QueryClientProvider>
  );
}

export default App;
