import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider, Text } from "@mantine/core";
import ContextProvider from "./context/selectedCardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
