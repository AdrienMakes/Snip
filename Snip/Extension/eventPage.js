var port = null;

var
function sendAudibleTabs() {
    f
}

function tabsChanged(integer tabId, object changeInfo, Tab tab) {
    if (audible in changeInfo){
        sendAudibleTabs()
    }
}

chrome.tabs.onUpdated.addListener(tabsChanged);