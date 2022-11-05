import { SITES } from "./constants.js";

const background = chrome.runtime.connect({ name: SITES.AIRBNB });

console.log(`Extension running on ${SITES.AIRBNB}.`);