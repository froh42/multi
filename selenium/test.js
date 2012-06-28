// FS: This is copypasta from
// https://github.com/Camme/webdriverjs

var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote();
//var client = webdriverjs.remote({host: "xx.xx.xx.xx"}); // to run it on a remote webdriver/selenium server
//var client = webdriverjs.remote({desiredCapabilities:{browserName:"chrome"}}); // to run in chrome
//var client = webdriverjs.remote({desiredCapabilities:{browserName:"htmlunit"}});

client
    .init()
    .url("https://github.com/")
    .getElementSize("id", "header", function(result){ console.log(result);  })
    .getTitle(function(title) { console.log(title) })
    .getElementCssProperty("id", "header", "color", function(result){ console.log(result);  })
    .end(); 


