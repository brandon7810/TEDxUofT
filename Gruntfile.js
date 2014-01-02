module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/global.min.css': ['css/main.css','css/animation.css']
        }
      }
    },

    jshint: {
      beforeconcat: ['js/*.js']
    },

    concat: {
      dist: {
        src: [
          'js/lib/*.js',
        ],
        dest: 'js/build/production.js'
      }
    },

    uglify: {
      build: {
        files : {
          'js/build/cube.min.js' : 'js/cube.js',
          'js/build/tween.min.js' : 'js/tween.js',
          'js/build/transition.min.js' : 'js/transition.js'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);
  grunt.registerTask('dev', ['connect', 'watch']);

};
