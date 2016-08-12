var b = {

    init: function () {
	chrome.extension.onRequest.addListener(function (request) {
		if (request.method === "openURL") {
		    //chrome.tabs.create({ url: request.url, selected: true });
		    chrome.windows.create({ url: request.url, type: "popup", incognito: true});
		    sendResponse({ message: "success" });
		}
		else 
		    sendResponse({});
	    });
    }
};

b.init();