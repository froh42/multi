/*global module:false*/
module.exports = function (grunt) {
    this.jsSources = ['grunt.js', 'src/*.js', 'spec/*.js'];

    // Project configuration.
    grunt.initConfig({
        meta:{
            title:'Multi (Test1)',
            name:"Frohwalt Egerer",
            homepage:'http://et42.de',
            banner:'/* \n' +
                ' * \tAuthor:\t\t{{meta.name}}\n' +
                ' * \tWebsite:\t{{meta.homepage}}\n' +
                ' * \n' +
                ' * \tTitle:\t\t{{meta.title}}\n' +
                ' * \tBuild:\t\t{{today "yyyyddmm"}}\n' +
                ' * \n' +
                ' */'
        },
        watch:{
            files:this.jsSources,
            tasks:'default'
        },
        lint:{
            all:this.jsSources
        },
        jshint:{
            options:{
                browser:true
            }
        },
        shell:{
            test:{
                command:'jsTestDriver/runtests.sh',
                stdout:true
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint shell:test');
    grunt.loadNpmTasks('grunt-shell');
};


/*

 More stuff to possibly include:

 http://coveraje.github.com/                     -- Javascript code coverage
 http://stackoverflow.com/a/5168482/60229        -- Link to client side JS package managers

 */