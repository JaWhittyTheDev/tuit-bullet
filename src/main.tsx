// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import "./index.css";

// Создаём корень и рендерим Routes
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);