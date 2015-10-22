var challenge_question = document.getElementById('lblChallenge').innerHTML;
console.log(challenge_question);

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  	// Replace all rules ...
  	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    	chrome.declarativeContent.onPageChanged.addRules([
    	{
	        // That fires when a page's URL is the Citrix 2 Factor page...
	        conditions: [
	        new chrome.declarativeContent.PageStateMatcher({
	        	pageUrl: { urlContains: 'citrix2.alldata.net/Citrix/XenAppCol/auth/challenge.aspx'},
	        })
	        ],
	        // And shows the extension's page action.
	        actions: [ new chrome.declarativeContent.ShowPageAction() ]
    	}
    	]);
	});
});



function parse (input) {
	var output = new Array();
	input = input.trim();
	input = input.split(" ");

	for (var i = 0; i < input.length; i++) {
		if (input[i].charAt(0) == "[") {
			output.push(input[i].slice(1,3));
		};
	};

	return output;
};