chrome.browserAction.onClicked.addListener(function(tab) {
	
  chrome.tabs.executeScript(null, {file: "jquery.js"});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var activeTab = tabs[0];
	chrome.tabs.executeScript({
		file: "jquery.js"
	});
	chrome.tabs.executeScript({
		file: "content.js"
	});
  });
});