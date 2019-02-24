// Compile ES6 code
module.exports = {
  options: {
    presets: ['@babel/preset-env'],
    babelrc: false
  },
  main: {
    files: [{
      '<%= paths.build.js %>/body.min.js': '<%= paths.build.js %>/body.min.js',
      '<%= paths.build.js %>/head.min.js': '<%= paths.build.js %>/head.min.js'
    }]
  }
}
