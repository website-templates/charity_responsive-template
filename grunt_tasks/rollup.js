// Bundle ES6 modules.
var babel = require('rollup-plugin-babel');

module.exports = {
  options: {
    format: 'umd',
    plugins: function () {
      return [
        babel({
          exclude: './node_modules/**',
          presets: ['@babel/preset-env'],
          babelrc: false
        })
      ]
    }
  },
  main: {
    files: [{
      '<%= paths.build.js %>/body.min.js': '<%= paths.dev.js %>/body.js',
      '<%= paths.build.js %>/head.min.js': '<%= paths.dev.js %>/head.js'
    }]
  }
}
