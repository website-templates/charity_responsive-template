// Compile Pug/Jade templates
module.exports = {
  main: {
    options: {
      client: false,
      pretty: true,
      data: function(dest, src) {
        var fs = require("fs"),
            paths = require(__dirname + '/config/paths.js'),
            files = fs.readdirSync(paths.dev.data),
            obj = {};

        for (var i in files) {
          var key = files[i].substr(0, files[i].lastIndexOf('.')),
              val = JSON.parse(fs.readFileSync(paths.dev.data + '/' + files[i]));

          obj[key] = val;
        }

        return obj;
      }
    },
    files: [ {
      cwd: '<%= paths.dev.jade %>/pages',
      src: ['*.jade'],
      dest: '<%= paths.build.html %>',
      expand: true,
      ext: '.html'
    },{
      cwd: '<%= paths.dev.pug %>/pages',
      src: ['*.pug'],
      dest: '<%= paths.build.html %>',
      expand: true,
      ext: '.html'
    } ]
  }
}
