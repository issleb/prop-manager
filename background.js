chrome.runtime.onConnect.addListener(async (port) => {
    console.log(`PropManager started on ${port.sender.url}. Standing by.`);
});