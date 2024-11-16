import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StrictMode } from "react";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
