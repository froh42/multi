#!/usr/bin/env node

var fs = require("fs");
var childProcess = require("child_process");
var util = require("util");

process.env.PATH = process.env.PATH+":"+__dirname+"/node_modules/.bin";

function runTests() {
    var started = false;
    console.log("Running buster server");
    server = run("buster-server", []);
    console.log("Running phantomjs");
    phantom = run("phantomjs", ["testHelper/phantomjs-buster.js"]);
    console.log("Running buster tests");
    phantom.stdout.on('data', function(data) {
        if (data.toString().indexOf("status: success") != -1 && !started) {
            started = true;
            console.log("*** Phantom captured, starting tests");
            buster = run("buster", ["test"]);
            buster.on('exit', function(code) {
                server.kill('SIGINT');
                phantom.kill('SIGINT');
            });
        }
    })
}

function run(cmd, argv) {

    var run = childProcess.spawn(cmd, argv, {
        env: process.env,
        setsid: true
    });

    run.stdout.on('data', function(data) {
        process.stdout.write(data);
    });

    run.stderr.on('data', function(data) {
        process.stderr.write(data);
    });

    return run;
}

runTests()