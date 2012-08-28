var config = module.exports;

//config["My tests"] = {
//    rootPath: "../",
//    environment: "browser",
//    // or "node"
//    sources: ["src/lib/knockout-2.1.0.debug.js", "src/lib/knockout.mapping-latest.debug.js", //
//    "src/viewmodel.js"],
//    tests: ["spec/*Test.js"]
//};
//config["amd tests"] = {
//	environment: "browser",
//	rootPath: "src",
//	sources: ["*.js"],
//	tests: ["testamd.js"],
//	libs: ["lib/require.js"],
//	extensions: [require("buster-amd")]
//};

// Add more configuration groups as neededvar config = module.exports;
config["web-module"] = {
    environment: "browser",
    rootPath: "js",
    sources: ["testModule.js"],
    tests: ["test/*test.js"],
    libs: ["require-jquery.js"],
    extensions: [require("buster-amd")]
};
