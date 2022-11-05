import { SITES } from "./constants.js";

const divName = "prop-manager";



const background = chrome.runtime.connect({ name: SITES.AIRBNB });
console.log(`Extension running on ${SITES.AIRBNB}.`);

let homeDiv = document.getElementById(divName);
if (!homeDiv)  {
    homeDiv = document.createElement("div");
    homeDiv.id = divName;
    document.body.appendChild(homeDiv);              
}