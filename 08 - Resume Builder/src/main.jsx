import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen bg-slate-700">
      <div className="hidden md:block h-screen overflow-hidden">
        <App />
      </div>
      <div className="md:hidden flex justify-center items-center h-screen text-3xl text-white">
        Mobile Not Supported
      </div>
    </div>
  </React.StrictMode>
);
