// Compile Pug/Jade templates
module.exports = {
	main: {
		options: {
			client: false,
			pretty: true,
			data: function(dest, src) {
				var fs = require("fs"),
					paths = require(__dirname + '/config/paths.js');

				return { 'config': JSON.parse(fs.readFileSync(paths.dev.data + '/config.json'))};
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
