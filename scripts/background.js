'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});
chrome.app.runtime.onLaunched.addListener(function() {
    if(!chrome.app.window.current()) {
        chrome.app.window.create("index.html",
            {bounds: {
              'width': 630,
              'height': 800
            },"resizable": false});
    }
});
