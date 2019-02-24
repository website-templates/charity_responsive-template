// Compile Stylus files to CSS
module.exports = {
  main: {
    options: {
      linenos: false,
      compress: false
    },
    files: [{
      expand: true,
      cwd: '<%= paths.dev.stylus %>',
      src: [ '*.styl' ],
      dest: '<%= paths.build.css %>',
      ext: '.min.css'
    }]
  }
}
