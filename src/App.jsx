import { useState } from "react";
import reactLogo from "./assets/react.svg";

// import "./App.css";
import { Button } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>Settings</Button>
      <h1 className="text-amber-500">Hello Ji</h1>
    </>
  );
}

export default App;
