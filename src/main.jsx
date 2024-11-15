import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
