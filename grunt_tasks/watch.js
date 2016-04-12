// Run tasks whenever watched files change
module.exports = {
	js: {
		files: [
			'<%= paths.dev.js %>/*.js',
			'<%= paths.dev.js %>/lib/*.js'
		],
		tasks: [
			'rigger:main'
		],
		options: {
			spawn: false
		}
	},
	stylus: {
		files: [
			'<%= paths.dev.stylus %>/*.styl'
		],
		tasks: [
			'newer:stylus:main',
			'autoprefixer:main',
        	'cmq:main'
		],
		options: {
			spawn: false
		}
	},
	data: {
		files: [
			'<%= paths.dev.data %>/*.*'
		],
		tasks: [
			'async_jade_data:main',
			'jade:main'
		],
		options: {
			spawn: false
		}
	},
	jade: {
		files: [
			'<%= paths.dev.jade %>/pages/*.jade'
		],
		tasks: [
			'newer:jade:main'
		],
		options: {
			spawn: false
		}
	},
	images: {
		files: [
			'<%= paths.dev.images %>/**/*.*'
		],
		tasks: [
			'sync:images'
		],
		options: {
			spawn: false
		}
	},
	helpers: {
		files: [
			'<%= paths.dev.helpers %>/**/*.*',
			'<%= paths.dev.helpers %>/.htaccess'
		],
		tasks: [
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
