import { createRoot } from "react-dom/client";

/* Importanto Biblioteca do FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons"; // Pacote de ícones sólidos
library.add(fas); // Adiciona todos os ícones sólidos

import App from "./App";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
