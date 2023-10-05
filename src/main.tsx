import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PlayersProvider } from "./context/players-context.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlayersProvider>
      <RouterProvider router={router} />
    </PlayersProvider>
  </React.StrictMode>
);
