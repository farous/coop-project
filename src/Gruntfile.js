module.exports = function(grunt){
 
 require('load-grunt-tasks')(grunt);

grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    concat_vendor: {
      src: ['main/webapp/resources/js/bower_components/ng-file-upload/angular-file-upload-shim.min.js', 
      		'main/webapp/resources/js/bower_components/angular/angular.min.js', 
      		'main/webapp/resources/js/bower_components/ng-file-upload/angular-file-upload.min.js', 
      		'main/webapp/resources/js/bower_components/angular-route/angular-route.min.js', 
    			'main/webapp/resources/js/bower_components/angular-bootstrap/ui-bootstrap.min.js',
          'main/webapp/resources/js/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'],
      dest: 'main/webapp/output/min-vendor.js',
    },

    concat_cooparties: {
      src: ['app/js/app.js', 
          'app/js/*.js'],
      dest: 'main/webapp/output/min.js',

    }

  },

  uglify: {
  	options: {
  		mangle: false //pour éviter les problèmes avec angular après minification
  	},
    dist: {
      files: {
        'main/webapp/output/min.js': ['main/webapp/output/min.js']
      }
    }
  },

  cssmin: {
	combine: {
	    files: {
	      'main/webapp/output/min.css': ['app/css/app.css']
	  }
  	}
  },

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: '../src', 
          livereload: true
        }
      }
    },
 
    watch: {
      all: {
        files: ['app/**/*.*'],
        options: {
          livereload: true
        }
      }
    },
 
    open: {
      all: {
        path: 'http://localhost:9000/app/index.html'
      }
    }

});

 grunt.registerTask('server', [
   	'concat', 
    'uglify', 
    'cssmin',
    'express',
    'open',
    'watch'
  ]);

}