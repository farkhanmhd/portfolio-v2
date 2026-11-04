import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/manrope";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./app.tsx";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("The root element is missing");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
