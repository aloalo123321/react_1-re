import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { firstnumber } from "./test1.jsx";
import { secondnumber } from "./test1.jsx";
console.log(firstnumber + secondnumber);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
