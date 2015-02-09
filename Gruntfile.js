module.exports = function(grunt) {

    grunt.registerTask('default', ['cssmin']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                'css/style.min.css': ['css/style.css'],
                'css/print.min.css': ['css/print.css'],
                'css/smartphone.min.css': ['css/smartphone.css'],
                'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
                'views/css/style.min.css': ['views/css/style.css']

                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};    