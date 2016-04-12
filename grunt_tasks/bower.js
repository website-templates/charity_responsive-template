// Manage bower dependencies
module.exports = {
	// Copy bower files into js vendor folder
	main: {
		dest: '<%= paths.dev.js %>/vendor',
		options: {
			checkExistence: true,
			overrides: {
				html5shiv: {
					main: "dist/html5shiv.js"
				},
				respond: {
					main: "src/respond.js"
				}
			}
		}
	}
}
