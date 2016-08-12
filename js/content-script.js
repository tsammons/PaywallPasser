$(document).ready(function () {
//$(window).unload(function () {
//document.addEventListener('DOMContentLoaded', function() {

    var banned;

    function getData() {
	chrome.storage.sync.get("test", function(data) {
		banned = data.test;
	    });
    }

    function openURL(event) {
	getData();
	var url = $(this)[0].href, 
	    bool = 0;
       

	for (var i=0; i<banned.length; i++)
	    if (url.indexOf(banned[i]) > -1) bool = 1;
		
	if (bool === 1) {
	    this.target = "";
	    event.preventDefault();
	    event.stopPropagation(); 
	    chrome.extension.sendRequest({ method: "openURL", url: url }, function (response) {return;});
	    return false;
	}
    };
    
    // run
    getData();
    $("a").click(openURL);

});