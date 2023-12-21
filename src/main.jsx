import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CommerceProvider from "context/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommerceProvider>
      <App />
    </CommerceProvider>
  </React.StrictMode>
);
