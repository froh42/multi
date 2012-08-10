var assert = require("assert");
var Browser = require("zombie");
var repl = require("repl");
var util = require("util");

// Construct URL to local file.
var test_url = "file://" + __dirname + "/src/game.html";



var i = function(obj, depth) {
        console.log(util.inspect(obj, false, depth, true));
    };

var j = "banane";



browser = new Browser()

browser.visit(test_url, function() {
//    r = repl.start("zombie> ");
//    r.context.i = i;
//    r.context.h = function() {
//        console.log(browser.html());
//    }

    // Xpath geht
    input = browser.xpath("//input[@data-bind='value: result']");
    assert.notEqual(0, input.value.length);

    // ... aber mit CSS ist's auch nicht schlecht.
    var result = Number(browser.text("span[data-bind='text: factor1']")) * Number(browser.text("span[data-bind='text: factor2']"));
    browser.fill("input", result);
    assert.equal("true", browser.text("span[data-bind='text: resultIsCorrect']"));
    console.log("Success, baby!");
});
