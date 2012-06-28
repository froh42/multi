// Simple test to see whether this is working at all

var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote();

// Construct URL to local file.
var test_url = "file://" + __dirname + "/../src/start.html";

client
    .init()
    .url(test_url)
    .pause(2000)
    .click("#StartGame")
    .pause(2000)
    .end(); 


