import React from "react";
import ReactDOM from "react-dom/client";
import { HTML } from "../src/constants.js";
import Extension from "../src/App/Extension";

const homeDiv = document.getElementById(HTML.ROOT_ID);
const root = ReactDOM.createRoot(homeDiv);

root.render(
  <React.StrictMode>
    <Extension />
  </React.StrictMode>
);