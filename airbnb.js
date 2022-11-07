import React from "react";
import ReactDOM from "react-dom/client";
import { SITES } from "./constants.js";
import Extension from "./App/Extension";
import Toolkit from "./App/Toolkit/Toolkit";

const divName = "prop-manager";

const background = chrome.runtime.connect({ name: SITES.AIRBNB });
const sendMessage = (name, params) => {
    const message = {
        type: name,
        ...params
    }

    background.postMessage(message);
};

console.log(`Extension running on ${SITES.AIRBNB}.`);

let homeDiv = document.getElementById(divName);
if (!homeDiv) {
    homeDiv = document.createElement("div");
    homeDiv.id = divName;
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
