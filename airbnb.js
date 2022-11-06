import React from 'react';
import ReactDOM from 'react-dom/client';
import { SITES } from "./constants.js";
import Extension from './App/Extension';

const divName = "prop-manager";

const background = chrome.runtime.connect({ name: SITES.AIRBNB });
console.log(`Extension running on ${SITES.AIRBNB}.`);

let homeDiv = document.getElementById(divName);
if (!homeDiv)  {
    homeDiv = document.createElement("div");
    homeDiv.id = divName;
    document.body.appendChild(homeDiv);              
}

const root = ReactDOM.createRoot(homeDiv);
root.render(
  <React.StrictMode>
    <Extension />
  </React.StrictMode>
);