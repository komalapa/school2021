import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import printLog from "./log";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

printLog()