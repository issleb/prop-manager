import Install from "./install";

import Parser from "../services/parser";
import { SITES, MESSAGES } from "../constants";

Install.start();

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