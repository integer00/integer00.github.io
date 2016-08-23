module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    sass: {  // Task              
       dev: {                          //target
         options: {                     //target option  
             style: 'expanded'
   
	 	  },

            files: {
              'css/style.css':'src/style.scss'
            }
         },
                          
  },

    postcss: {
     options:{
       map:true,
        processors:[
	      require('autoprefixer')({
		      browsers:['last 2 versions']
	      })
	    ]
	    },
    dist:{
		 src: 'css/*.css'
			    }
  },

 watch: {
    css: {
      // We watch and compile sass files as normal live reload here 
      files: ['src/style.scss'],
      tasks: ['sass:dev']

    },
    
    html: {
      // We watch and compile sass files as normal live reload here 
      files: ['**/*.html'],
     
    },
     options: {
      livereload: {
        host: 'localhost',
        port: 35729,
     
            }
          }
        }
});


grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-postcss');

grunt.registerTask('compile', ['sass:compile']);
grunt.registerTask('prefix',['postcss:dist']);
grunt.registerTask('default', ['watch']);


};
