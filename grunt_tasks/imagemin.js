//Minify images
module.exports = {
  main: {
    options: {
      optimizationLevel: 7
    },
    files: [{
      expand: true,
      cwd: '<%= paths.build.images %>',
      src: ['**/*.*'],
      dest: '<%= paths.build.images %>'
    }]
  }
}
