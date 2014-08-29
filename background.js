chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.ted.com/";
  chrome.tabs.create({ url: newURL });
});