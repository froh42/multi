var config = module.exports;

config["amd tests"] = {
    environment: "browser",
    rootPath: "src",
    sources: ["*.js"],
    tests: ["test/*Test.js"],
    libs: ["lib/*.js"],
    extensions: [require("buster-amd")]
};
