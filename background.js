/*chrome.runtime.onMessage.addListener(function (message) {
    if (message.procedure == 1) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { name: "procedure", procedure: 2 })
        })
    }
    else if (message.procedure == 3) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { name: "procedure", procedure: 3 })
        })
    }
});

var isFirstTime = true*/

var count = 0;

chrome.browserAction.onClicked.addListener(function (tab) {
    count++;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (count == 1) {
            chrome.tabs.sendMessage(tabs[0].id, { name: "procedure", procedure: 1 });

        } else if (count == 2) {
            chrome.tabs.sendMessage(tabs[0].id, { name: "procedure", procedure: 2 });

        } else {
            chrome.tabs.sendMessage(tabs[0].id, { name: "procedure", procedure: 3 });
            count = 0;
        }
    });
});
