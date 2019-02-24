// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
  test:{
    options: {
      server: {
        baseDir: '<%= paths.build.main %>'
      }
    }
  },
  dev:{
    bsFiles: {
      src: [
        '<%= paths.build.js %>/*.min.js',
        '<%= paths.build.css %>/*.min.css',
        '<%= paths.build.images %>/**/*.*',
        '<%= paths.build.html %>/*.html'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: '<%= paths.build.main %>'
      }
    }
  }
}
