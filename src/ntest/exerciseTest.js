var buster = require("buster");
var Browser = require("zombie");
var repl = require("repl");
var util = require("util");
var path = require("path");
var stat = require("node-static");
var httpserver = require("./httpserver");
var sys = require("sys");

// Construct URL to local file.
var test_url = "http://127.0.0.1:7335/game.html";

buster.testRunner.timeout = 1000;

var browser;
var server;

function factor1() {
    return Number(browser.text("span[data-bind='text: currentExercise().factor1']"));
}

function factor2() {
    return Number(browser.text("span[data-bind='text: currentExercise().factor2']"));
}

function fillResult(result) {
    browser.fill("input", result);
}

function resultIsCorrect() {
    return Boolean(browser.text("span[data-bind='text: currentExercise().resultIsCorrect']"));
}

buster.testCase("zombie test", {
    setUp: function() {
        browser = new Browser();
        server = httpserver.create(path.dirname(__dirname), {}, 7335);
    },
    tearDown: function() {
        server.close();
    },
    "page loads": function(done) {
        browser.visit(test_url, function() {
            expect(browser.window.document.title).toBe("Multiplication trainer prototype");
            done();
        });
    },
    "entering a correct multiplication gives a correct result": function(done) {
        browser.visit(test_url, function() {
            var result = factor1() * factor2();
            fillResult(result);
            expect(resultIsCorrect()).toBe(true);
            done();
        });
    },
    "entering a wrong multiplication gives a correct result": function(done) {
        browser.visit(test_url, function() {
            var result = factor1() * factor2();
            fillResult(result * 2);
            expect(resultIsCorrect()).toBe(false);
            done();
        });
    }
});