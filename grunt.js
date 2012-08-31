/*global module:false*/
module.exports = function(grunt) {
    this.jsSources = ['grunt.js', 'src/*.js', 'src/test/*.js'];

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
    grunt.registerTask('default', 'lint shell:test');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-growl');
};


/*

 More stuff to possibly include:

 http://coveraje.github.com/                     -- Javascript code coverage
 http://stackoverflow.com/a/5168482/60229        -- Link to client side JS package managers

 */