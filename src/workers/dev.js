import Messenger from "../services/messenger";
import { MESSAGES } from "../constants";

const start = () => {
    chrome.runtime.onConnect.addListener(async (port) => {
        console.log(`${port.name} Dev started on ${port.sender.url}.`);
    
        Messenger.listen(port, MESSAGES.TOOLKIT_REFRESH, () => {
            console.log("Reloading runtime.");
            chrome.runtime.reload(); 
        })
    });
}

const Dev = {
    start
};

export default Dev;