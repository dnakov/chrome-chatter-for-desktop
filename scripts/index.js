var bg, sf1;

function setPageLocation() {
    bg.lastUrl = sf1.src;
}

window.onload = function() {
    chrome.runtime.getBackgroundPage(function(win) {
        bg = win;
        sf1 = document.getElementById('sf1');
        sf1.src = bg.lastUrl || "https://login.salesforce.com/?ec=302&startURL=%2Fone%2Fone.app";
    });
    setInterval(setPageLocation, 1000);
}

