import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";
import { ScreenProvider } from "./context/ScreenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Contexto de la sesion del usuario */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
