"use strict";

document.addEventListener("DOMContentLoaded", function() { 
	document.getElementById('clicker').addEventListener("click", getFormData);
    });


function getFormData() {
    var name = document.getElementById('sitename').value;

    chrome.storage.sync.get("test", function(data) {
	    data.test.push(name);
	    chrome.storage.sync.set({'test': data.test}, function () {console.log('Saved');});
	});
    

}