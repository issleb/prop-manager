import Install from "./install";
import Dev from "./dev";

import Messenger from "../services/messenger";
import Parser from "../services/parser";
import Data from "../services/data";
import { SITES, MESSAGES } from "../constants";

Install.start();
Dev.start();

chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`${port.name} started on ${port.sender.url}.`);

    if (port.name == SITES.AIRBNB) {      
        const channelData = Parser.parseAirUrl(port.sender.url);
        const room = Data.getRoomByAir(channelData.id);
        
        console.log('channelData', channelData);
        console.log('room', room);

        if (room) Messenger.send(port, MESSAGES.ROOM_LOAD, { room });
    }
    if (port.name == SITES.VRBO) {
        const channelData = Parser.parseVrboUrl(port.sender.url);
        const room = Data.getRoomByVrbo(channelData.id);
        
        if (room) Messenger.send(port, MESSAGES.ROOM_LOAD, { room });
    }
});