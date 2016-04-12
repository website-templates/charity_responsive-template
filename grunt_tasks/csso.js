// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
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
