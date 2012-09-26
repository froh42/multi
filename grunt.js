var fs = require("fs");
var childProcess = require("child_process");
var util = require("util");
process.env.PATH = process.env.PATH + ":" + __dirname + "/node_modules/.bin";

module.exports = function(grunt) {
    this.jsSources = ['grunt.js', 'src/*.js', 'src/test/*.js', 'src/ntest/*.js'];

    // Project configuration.
    grunt.initConfig({
        meta: {
            title: 'Multi (Test1)',
            name: "Frohwalt Egerer",
            homepage: 'http://et42.de'
        },
        watch: {
            files: this.jsSources,
            tasks: 'default'
        },
        lint: {
            all: this.jsSources
        },
        jshint: {
            options: {
                browser: true
            }
        },
        shell: {
            test: {
                command: './test.js',
                stdout: true
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint browserTest zombie selenium');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-growl');

    grunt.registerTask('browserTest', "run browser tests", function runTests() {
        var done = this.async();
        var started = false;
        server = runCmd("buster-server", []);
        phantom = runCmd("phantomjs", ["phantomjs-buster.js"]);
        phantom.stdout.on('data', function(data) {
            if (data.toString().indexOf("success") != -1 && !started) {
                started = true;
                buster = runCmd("buster-test", ["-rdots", "-gamd"]);
                buster.on('exit', function(code) {
                    server.kill('SIGINT');
                    phantom.kill('SIGINT');
                    done();
                });
            }
        });
    });

    grunt.registerTask('zombie', "run zombie tests", function runTests() {
        var done = this.async();
        buster = runCmd("buster-test", ["-rdots", "-gnode"]);
        buster.on('exit', function(code) {
            done();
        });
    });

    grunt.registerTask('selenium', "run selenium tests", function runTests() {
        var done = this.async();
        sel = runCmd("./selenium/test.sh");
        sel.on('exit', function(code) {
            done();
        });
    });

};


function runCmd(cmd, argv) {

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
