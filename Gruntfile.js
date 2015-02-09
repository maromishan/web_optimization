module.exports = function(grunt) {
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('cssmin', ['cssmin']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                'css/style.min.css': ['css/style.css', 'css/print.css', 'css/smartphone.css'],
                'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css', 'views/css/style.css']
                }
            }
        },
        uglify: {
            target: {
                files: {
                'js/perfmatters.min.js': ['js/perfmatters.js'],
                'views/js/main.min.js': ['views/js/main.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'views/js/*.js'],
                tasks: ['uglify'],
            },
            css: {
                files: ['css/*.css', 'views/css/*.css'],
                tasks: ['cssmin'],
            },
        },      
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};    