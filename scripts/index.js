var bg, sf1;

function setPageLocation() {
    bg.lastUrl = sf1.src;
    chrome.storage.sync.set({'url': bg.lastUrl});
}

window.onload = function() {
    chrome.storage.sync.get(function(data) {
        sf1 = document.getElementById('sf1');
        sf1.src = data.url || "https://login.salesforce.com/?ec=302&startURL=%2Fone%2Fone.app";
    });
    chrome.runtime.getBackgroundPage(function(win) {
        bg = win;
        setInterval(setPageLocation, 1000);
    });
}

