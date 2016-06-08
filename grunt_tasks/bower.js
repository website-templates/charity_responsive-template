// Manage bower dependencies
module.exports = {
	// Copy bower files into js vendor folder
	main: {
		dest: '<%= paths.dev.js %>/vendor',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					main: "dist/jquery.js"
				},
				modernizr: {
					main: "modernizr.js"
				}
			}
		}
	}
}
