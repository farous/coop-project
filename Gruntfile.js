module.exports = function(grunt){
 
 require('load-grunt-tasks')(grunt);

grunt.initConfig({

  express: {
    all: {
      options: {
        port: 9000,
        hostname: "0.0.0.0",
        bases: ['./.tmp','./app'],
        livereload: true
      }
    }
  },
 
  watch: {
    all: {
      files: [
        'app/**/*.html',
        '.tmp/css/*.css',
        '.tmp/js/*.js',
        'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ],
      options: {
        livereload: true
      }
    },
    js: {
      files: ['app/js/**/*.js'],
      tasks: ['browserify:dist']
    },
    css: {
      files: ['app/css/**/*.scss'],
      tasks: ['compass:dist']
    }
  },
 
  open: {
    all: {
      path: 'http://localhost:9000/index.html'
    }
  },

  compass: {
    dist: {
      options: {
        sassDir: 'app/css',
        cssDir: '.tmp/css'
      }
    }
  },

  browserify: {
    dist: {
      files: {
        '.tmp/js/app.js': ['app/js/app.js']
      },
      options: {

      }
    }
  }
});

grunt.registerTask('default', [
    'compass:dist',
    'browserify:dist',
    'express',
    'open',
    'watch'
  ]);

}