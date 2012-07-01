// Test: Transition from start- to game screen

var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote();

// Construct URL to local file.
var test_url = "file://" + __dirname + "/../src/start.html";

client
    .init()
    .url(test_url);

client
    .element("link text", "Start game", function(result) {
	client.showTest(result.status == 0, result.status, 0,
	    "Clicking on ``Start game'' link.");
        client.elementIdClick(result.value.ELEMENT);
    });

client 
    .element("link text", "Next exercise", function(result) {
	client.showTest(result.status == 0, result.status, 0,
	    "Asserting presence of ``Next exercise'' link.");
    });

client
    .pause(2000)
    .end();


