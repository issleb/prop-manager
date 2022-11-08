const start = () => {
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
}

const Install = {
    start
};

export default Install;