module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    sass: {  // Task
                
         
            dev: {                          //target
              options: {                     //target option  
                style: 'expanded'
            },

            files: {
              'css/style.css': 'style.scss'
            }
         },
                          
  },

 watch: {
    css: {
      // We watch and compile sass files as normal live reload here 
      files: ['style.scss'],
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

grunt.registerTask('compile', ['sass:compile']);
grunt.registerTask('default', ['watch']);


};
