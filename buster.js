var config = module.exports;
	
config["amd"] = {
	environment: "browser",
	rootPath: "src",
	sources: ["*.js"],
	tests: ["test/*Test.js"],
	libs: ["lib/*.js"],
	extensions: [require("buster-amd")]
};

config["node"] = {
	environment: "node",
	rootPath: "src",
	tests: ["ntest/*Test.js"]
};