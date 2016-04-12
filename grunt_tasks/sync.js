// Grunt.js task providing one-way synchronization of directories
module.exports = {
	fonts: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.fonts %>',
			src: ['**/*.{eot,svg,ttf,otf,woff,woff2}'],
			dest: '<%= paths.build.fonts %>'
		}]
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.helpers %>',
			src: ['*.*', '.htaccess'],
			dest: '<%= paths.build.main %>'
		}]
	},
	images: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.images %>',
			src: ['**/*.*'],
			dest: '<%= paths.build.images %>'
		}]
	}
}
