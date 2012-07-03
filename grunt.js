/*global module:false*/
module.exports = function (grunt) {

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
            files:["src/js/**/*.js", "grunt.js"],
            tasks:'default'
        },
        lint:{
            all:['grunt.js', 'src/*.js', 'spec/*.js']
        },
        jshint:{
            options:{
                browser:true
            }
        },
        shell:{
            test:{
                command:'jsTestDriver/runtests.sh',
                stdout: true
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint');
    grunt.loadNpmTasks('grunt-shell');
};


/*

 More stuff to possibly include:

 http://coveraje.github.com/                     -- Javascript code coverage
 http://stackoverflow.com/a/5168482/60229        -- Link to client side JS package managers

 */