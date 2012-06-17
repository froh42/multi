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
        concat:{
            'lib/multi.js':["src/lib/knockout-2.1.0.js", "src/bootstrap/js/bootstrap-*.js"]
        },
        min:{
            'lib/multi.min.js':['<banner>', 'src/multi.js']
        }
    });

    // Default task.
    grunt.registerTask('default', 'concat min');

};
