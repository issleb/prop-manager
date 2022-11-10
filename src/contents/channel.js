import React from "react";
import ReactDOM from "react-dom/client";
import Messenger from "../services/messenger";
import { HTML, MESSAGES } from "../constants";
import Extension from "../app/Extension";
import Toolkit from "../app/Toolkit/Toolkit";

const loadRoom = (port, room) => {
    let homeDiv = document.getElementById(HTML.ROOT_ID);
    if (!homeDiv) {
        homeDiv = document.createElement("div");
        homeDiv.id = HTML.ROOT_ID;
        document.body.appendChild(homeDiv);              
    }

    const root = ReactDOM.createRoot(homeDiv);
    root.render(
        <React.StrictMode>
            <Extension room={room} />
                <Toolkit sendMessage={(name, message) => {
                    Messenger.send(port, name, message);
                }} />
        </React.StrictMode>
    );
}

const start = (name) => {
    const port = chrome.runtime.connect({ name });
    console.log("PropertyManager Content script running.");

    Messenger.listen(port, MESSAGES.ROOM_LOAD, (message) => {
        if (message.room) {
            console.log("PropertyManager Room", message.room);
            loadRoom(port, message.room);
        }     
    })

    // Clean up if we get disconnected.
    port.onDisconnect.addListener(() => {
        document.body.removeChild(homeDiv);
    });
}

const ChannelContent = {
    start
};

export default ChannelContent;