chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`PropManager ${port.name} started on ${port.sender.url}.`);
});