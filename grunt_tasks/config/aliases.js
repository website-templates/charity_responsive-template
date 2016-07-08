module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		// 'shell:bower',
		// 'bower:main',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		// 'coffee:main',
		// 'rigger:main',
		// 'sass:main',
		'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		// 'sync:fonts',
		'sync:images',
		'browserSync:dev',
		'watch'
	],

	// Build task
	'build': [
		'imagemin:main',
		// 'uglify:main',
		'postcss:build',
		'htmlmin:main',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		// 'coffee:main',
		// 'rigger:main',
		// 'sass:main',
		'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		// 'sync:fonts',
		'sync:images',
		'imagemin:main',
		// 'uglify:main',
		'postcss:build',
		'htmlmin:main'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
