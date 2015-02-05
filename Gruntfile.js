module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        //Validate HTML
        htmlhint: {
    build: {
        options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'spec-char-escape': true,
            'id-unique': true,
            'head-script-disabled': true,
            'style-disabled': true
        },
        src: ['index.html', 'views/pizza.html']
    }
}
     //Compress
     uglify: {
    build: {
        files: {
            'build/js/perfmatters.min.js': ['js/perfmatters.js'],
            'build/views/js/main.min.js': ['views/js/main.js']
        }
    }
}

        //Automate tasks
        watch: {
    html: {
        files: ['index.html', 'views/pizza.html'],
        //Automate HTML validation process
        tasks: ['htmlhint']
    },

    js: {
        files: ['js/perfmatters.js', 'views/js/main.js'],
        tasks: ['uglify']
    }

}
    });

    grunt.registerTask('default', []);

};