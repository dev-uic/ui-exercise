module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'src/js/test.js'
        ],
        dest: 'dist/assets/js/test.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/assets/css/test.css': 'src/sass/test.scss',
        }
      }
    },

    uglify: {
      build: {
        src: 'src/js/test.js',
        dest: 'dist/assets/js/test.min.js'
      }
    },

    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false
        }
      },
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch', 'concat', 'uglify']);

};