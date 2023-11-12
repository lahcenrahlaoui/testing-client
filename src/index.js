import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




console.log(process.env.REACT_APP_ENVIREMENT)
console.log(process.env.NODE_ENV)