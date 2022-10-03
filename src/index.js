import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LightModeContextProvider } from "./context/lightModeContext/LightModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightModeContextProvider>
      <App />
    </LightModeContextProvider>
  </React.StrictMode>
);
