import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserContext.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Contexto de la sesion del usuario */}
    <UserProvider>
      <PayPalScriptProvider options={{"client-id": "AY0vZVirAd7P55529QNAtMJdaZegk1fYC7hDlMjkc0gFCjvyjI0542Ge544k7B1ViOqnSMmyTXQTP-eC"}}>
        <App />
      </PayPalScriptProvider>
    </UserProvider>
  </React.StrictMode>
);
