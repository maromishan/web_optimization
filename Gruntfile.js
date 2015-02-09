module.exports = function(grunt) {
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('cssmin', ['cssmin']);
    grunt.registerTask('uncss', ['uncss']);
    grunt.registerTask('processhtml', ['processhtml']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                 cwd: 'src/', expand: true, src: '**', dest: 'dist/'
                }
        },
        cssmin: {
            combine: {
                files: {
                'css/style.min.css': ['css/style.css', 'css/print.css', 'css/smartphone.css'],
                'views/css/style.min.css': ['views/css/bootstrap-grid.css', 'views/css/style.css']
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
        uncss: {
            dist: {
                files: {
                'css/tidy.min.css': ['index.html'],
                'views/css/style_concat.min.css': ['views/pizza.html']
                },
            options: {
                compress:true
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                'dist/index.html': ['index.html'],
                'dist/pizza.html': ['views/pizza.html']
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
                tasks: ['cssmin', 'uncss', 'processhtml'],
            },
        },      
    });
    //Load plugins
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
};    