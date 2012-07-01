// Test: Solve a multiplication exercise
// Depends: Selenium WebdriverJS

var assert = require("assert"),
    webdriver = require("./lib/webdriver");

var client = new webdriver.Builder().
//    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({
      'browserName': 'firefox',
      'version': '',
      'platform': 'ANY',
      'javascriptEnabled': true
    }).
    build();


// Construct URL to local file.

var test_url = "file://" + __dirname + "/../src/start.html";
client.get(test_url);


// Click through to next page.

client.findElement(webdriver.By.linkText("Start game")).click();


// Solve a mult exercise

// Uuaagh: We cannot hold state well in this async-o-rama,
// so I copy the factors into the result field, eval() (!!)
// it's content and send the result back to the field.

var field = client.findElement(webdriver.By.xpath("//input[@data-bind='value: result']"));
field.clear();

client
    .findElement(webdriver.By.xpath("//span[@data-bind='text: factor1']"))
    .getText()
    .then(function(text) {
	field.sendKeys(text + " * ");
	//console.log(text);
    });

client
    .findElement(webdriver.By.xpath("//span[@data-bind='text: factor2']"))
    .getText()
    .then(function(text) {
	field.sendKeys(text);
	//console.log(text);
    });

field
    .getAttribute("value")
    .then(function(text) {
	result = eval(text);
	console.log(text + " = " + result);
	field.clear();
	field.sendKeys(result);
    });


// For the world to see!
client.sleep(2000);

// Now we should probably click on a button or something
client
    .findElement(webdriver.By.linkText("Next exercise"))
    .click();

client.sleep(2000);
client.quit();

