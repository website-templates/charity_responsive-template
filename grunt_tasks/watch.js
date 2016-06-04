// Run tasks whenever watched files change
module.exports = {
	coffee: {
		files: [
			'<%= paths.dev.coffee %>/*.coffee'
		],
		tasks: [
			'newer:coffee:main',
			'rigger:main'
		],
		options: {
			spawn: false
		}
	},
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
	sass: {
		files: [
			'<%= paths.dev.sass %>/**/*.{sass,scss}'
		],
		tasks: [
			'sass:main',
			'postcss:dev',
			'cmq:main'
		],
		options: {
			spawn: false
		}
	},
	stylus: {
		files: [
			'<%= paths.dev.stylus %>/**/*.styl'
		],
		tasks: [
			'stylus:main',
			'postcss:dev',
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
			'pug:main'
		],
		options: {
			spawn: false
		}
	},
	pug: {
		files: [
			'<%= paths.dev.pug %>/pages/*.pug',
			'<%= paths.dev.jade %>/pages/*.jade'
		],
		tasks: [
			'newer:pug:main'
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
	fonts: {
		files: [
			'<%= paths.dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'
		],
		tasks: [
			'sync:fonts'
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
