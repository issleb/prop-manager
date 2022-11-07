import Parser from "./services/parser.js";
import { SITES, MESSAGES } from "./constants.js";

chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`PropManager ${port.name} started on ${port.sender.url}.`);

    if (port.name == SITES.AIRBNB) {
        const room = Parser.parseAirUrl(port.sender.url);
        console.log("PM Room", room);
    }

    if(process.env.NODE_ENV == "development") {
        port.onMessage.addListener(async (message) => {
            if (message.type === MESSAGES.TOOLKIT_REFRESH) {
                console.log("Reloading runtime.");
                chrome.runtime.reload();            
            };
        });
    }
});

// Updates content scripts on all relevant tabs when installed.
chrome.runtime.onInstalled.addListener(async () => {
    for (const cs of chrome.runtime.getManifest().content_scripts) {
        for (const tab of await chrome.tabs.query({url: cs.matches})) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: cs.js,
            });
        }
    }
});