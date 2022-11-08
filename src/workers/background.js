import Install from "./install";
import Dev from "./dev";

import Messenger from "../services/messenger";
import Parser from "../services/parser";
import { SITES, MESSAGES } from "../constants";

Install.start();
Dev.start();

chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`PropManager ${port.name} started on ${port.sender.url}.`);

    if (port.name == SITES.AIRBNB) {
        const room = Parser.parseAirUrl(port.sender.url);
        console.log("PM Room", room);
    }
    if (port.name == SITES.VRBO) {
        const room = Parser.parseVrboUrl(port.sender.url);
        console.log("PM Room", room);
    }

});