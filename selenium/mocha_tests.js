// Test: Transition from start- to game screen
// Depends: Selenium webdriver.js and mocha test runner

var assert = require("assert"),
    webdriver = require("./lib/webdriver");

var client = new webdriver.Builder()
//    usingServer('http://localhost:4444/wd/hub').
    .withCapabilities({
      'browserName': 'firefox',
      'version': '',
      'platform': 'ANY',
      'javascriptEnabled': true
    })
    .build();

// Construct URL to local file.
var test_url = "file://" + __dirname + "/../src/start.html";

describe("Run Selenium tests", function() {

    before(function(done) {
	client
	    .get(test_url);

	client
	    .findElement(webdriver.By.css("body"))
	    .then(function(){done()});
    });

    //beforeEach(function(done) {
    //    // Navigate to the URL for each test
    //    // client.get(test_url, done);
    //    done();
    //});

    describe('The start page', function() {
        it('should have a `Start game` link', function() {
	    assert.ok(client.findElement(webdriver.By.linkText("Start game")));
        });
    });

    describe('The `Start game` link', function() {
	it('should lead us to the game page', function(done) {
	    client.findElement(webdriver.By.linkText("Start game")).click();
	    assert.ok(client.findElement(webdriver.By.linkText("Next exercise")).then(function(){done();}));
	});
    });
});


