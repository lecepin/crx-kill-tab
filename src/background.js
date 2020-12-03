chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.close == true) {
    chrome.tabs.remove(sender.tab.id);
  }
});
