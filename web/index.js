import React from "react";
import ReactDOM from "react-dom/client";
import { HTML } from "../src/constants.js";
import Data from "../src/services/data";
import Web from "../src/App/Web";

const rooms = Data.getRooms();

const homeDiv = document.getElementById(HTML.ROOT_ID);

const root = ReactDOM.createRoot(homeDiv);
root.render(
    <React.StrictMode>
        <Web rooms={rooms} />
    </React.StrictMode>
);