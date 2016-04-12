// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database
module.exports = {
	options: {
		//By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
		browsers: '<%= settings.browserlist %>',
		cascade: true
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.min.css'],
			dest: '<%= paths.build.css %>'
		}]
	}
}
