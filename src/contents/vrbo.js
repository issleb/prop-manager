import React from "react";
import ReactDOM from "react-dom/client";
import { SITES, HTML } from "../constants";
import Extension from "../app/Extension";
import Toolkit from "../app/Toolkit/Toolkit";

const background = chrome.runtime.connect({ name: SITES.VRBO });
const sendMessage = (name, params) => {
    const message = {
        type: name,
        ...params
    }

    background.postMessage(message);
};

console.log(`Extension running on ${SITES.VRBO}.`);

let homeDiv = document.getElementById(HTML.ROOT_ID);
if (!homeDiv) {
    homeDiv = document.createElement("div");
    homeDiv.id = HTML.ROOT_ID;
    document.body.appendChild(homeDiv);              
}

const root = ReactDOM.createRoot(homeDiv);
root.render(
  <React.StrictMode>
    <Extension />
    if(process.env.NODE_ENV == "development") {
        <Toolkit sendMessage={sendMessage} />
    }
  </React.StrictMode>
  
);

// Clean up if we get disconnected.
background.onDisconnect.addListener(() => {
    document.body.removeChild(homeDiv);
});
