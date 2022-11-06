import Parser from "./parser.js";
import { SITES } from "./constants.js";

chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`PropManager ${port.name} started on ${port.sender.url}.`);

    if (port.name == SITES.AIRBNB) {
        const room = Parser.parseAirUrl(port.sender.url);

        console.log(room);
    }
});

if(process.env.NODE_ENV == "development") {
}