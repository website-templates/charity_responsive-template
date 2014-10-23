module.exports = function(grunt) {
    grunt.initConfig({

      //Compile *.less files
        less: {
          main: {
            files: [{
              expand: true,
              cwd: 'dev/styles',
              src: ['*.less'],
              dest: 'dev/css',
              ext: '.css'
            }]
          }       
        },  

      //Minify and organize *.css files  
        csso: {
          options: {
            keepSpecialComments: '*'
          },
          main: {
            files:[{
              expand: true,
              cwd: 'dev/css/',
              src: ['*.css', '!*.min.css'],
              dest: 'build/css/',
              ext: '.min.css'
            }]  
          }
        },

      //Minify *.html files 
        htmlmin: {  
            main: {     
              options: {             
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
              },
              files: [ {
                cwd: "dev/html",
                src: "*.html",
                dest: "build/",
                expand: true,
                ext: ".html"
              } ]
            }
        },

      //Minify image files   
        imagemin: {
          main: { 
            options: { 
              optimizationLevel: 7
            },              
            files: [{
              expand: true,      
              cwd: 'dev/img',            
              src: ['**/*.{png,jpg,gif}'], 
              dest: 'build/img/'            
            }]
          }
        },

      //Copy some folders or files (ex. *.php) from dev to build
        copy: {
          livejs: {
            files: [{
              expand: true, 
              cwd: 'dev/devtools/',
              src: '**/live.js',
              dest: 'build/js/'
            }]
          },        
          css: {
            files: [{
              expand: true, 
              cwd: 'dev/css',
              src: ['**/*.css'],
              dest: 'build/css/'
            }]
          },        
          html: {
            files: [{
              expand: true, 
              cwd: 'dev/html',
              src: ['**/*.html'],
              dest: 'build/'
            }]
          },   
          helpers: {
            files: [{
              expand: true,
              cwd: 'dev/main/helpers',
              src: ['**/*.*', '**/.htaccess'],
              dest: 'build'
            }]
          }
        },  

      //Delete .gitkeep files. If you don't use Bower - just run `grunt clean`  
        clean: {
          debug: ['build/css/**/*.css',
                  '!build/css/**/*.min.css']
        },
      //Watch for changes    
        watch: {
          all: {
            files: ['dev/html/**/*.html', 
                    'dev/styles/**/*.less', 
                    'dev/css/*.css',
                    'dev/img/**/*.{png,jpg,gif}'],
            tasks: ['default'],
            options: {
              spawn: false,
            },
          },
        }

    });
    
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['newer:less', 
                                   'newer:imagemin',
                                   'newer:copy',
                                   'watch'
    ]);

    grunt.registerTask('build', ['csso',
                                 'htmlmin',                                     
                                 'clean:debug'
    ]);
};