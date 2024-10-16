import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./App.jsx";
import "./index.css";
import Toolbar from "./practice/practice2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Button />
    <Toolbar />
  </React.StrictMode>
);
