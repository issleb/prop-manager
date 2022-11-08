import React from "react";
import ReactDOM from "react-dom/client";
import { HTML } from "../src/constants.js";
import Data from "../src/services/data";
import Extension from "../src/App/Extension";

const room = Data.getRoom("35782");

const homeDiv = document.getElementById(HTML.ROOT_ID);

const root = ReactDOM.createRoot(homeDiv);
root.render(
  <React.StrictMode>
    <Extension room={room} />
  </React.StrictMode>
);