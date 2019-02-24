// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
  sass: {
    src: ['<%= paths.dev.images %>/sprite/*.png', '!<%= paths.dev.images %>/sprite/sprite.png'],
    dest: '<%= paths.dev.images %>/sprite/sprite.png',
    imgPath: '../images/sprite/sprite.png',
    destCss: '<%= paths.dev.sass %>/helpers/sprite.sass',
    algorithm: 'left-right',
    algorithmOpts: {sort: false},
    padding: 5
  },
  stylus: {
    src: ['<%= paths.dev.images %>/sprite/*.png', '!<%= paths.dev.images %>/sprite/sprite.png'],
    dest: '<%= paths.dev.images %>/sprite/sprite.png',
    imgPath: '../images/sprite/sprite.png',
    destCss: '<%= paths.dev.stylus %>/helpers/sprite.styl',
    algorithm: 'left-right',
    algorithmOpts: {sort: false},
    padding: 5
  }
}
