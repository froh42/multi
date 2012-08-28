var config = module.exports;

config["Ye Olde Tests"] = {
    rootPath: ".",
    environment: "browser",
    sources: ["src/lib/knockout-2.1.0.debug.js", "src/lib/knockout.mapping-latest.js", "src/viewmodel.js"],
    tests: ["spec/*Test.js"]
};

config["amd tests"] = {
    environment: "browser",
    rootPath: "src",
    sources: ["testModule.js", "exerciseModel.js"],
    tests: ["test/*Test.js"],
    libs: ["lib/*.js"],
    extensions: [require("buster-amd")]
};

