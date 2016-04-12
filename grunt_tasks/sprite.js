// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
	main: {
		src: ['<%= paths.dev.images %>/sprite/*.png', '!<%= paths.dev.images %>/sprite/sprite.png'],
		dest: '<%= paths.dev.images %>/sprite/sprite.png',
		destCss: '<%= paths.dev.images %>/sprite/sprites.css',
		algorithm: 'left-right',
		algorithmOpts: {sort: false},
		padding: 1
	}
}
