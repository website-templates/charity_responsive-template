// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.dev.coffee %>',
		src: ['*.coffee'],
		dest: '<%= paths.dev.js %>/lib',
		ext: '.coffee.js',
		extDot: 'last'
	}
}
