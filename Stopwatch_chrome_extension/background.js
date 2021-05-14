
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("popup.html");
});

// // Save it using the Chrome extension storage API.
// chrome.storage.sync.set({timerDisplay: timerDisplay}, function() {});
//
// // Read it using the storage API
// chrome.storage.sync.get([timerDisplay], function(items) {
//  message('Settings retrieved', items);
// });
