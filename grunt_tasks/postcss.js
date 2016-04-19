// Transforming styles with JS plugins
module.exports = {
	dev: {
		options: {
		    processors: [
		    	require('autoprefixer')({
		    		browsers: [
						'> 1%',
						'last 30 versions',
						'Opera 12.1',
						'Explorer > 7',
						'Safari >= 5'
					],
					cascade: true
				}),
				require('css-mqpacker')({sort: true})
		    ]
		},
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.min.css'],
			dest: '<%= paths.build.css %>'
		}]
	},
	build: {
		options: {
		    processors: [
		    	require('postcss-csso')({
		    		keepSpecialComments: '*',
					restructure: false
		    	})
		    ]
		},
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.min.css'],
			dest: '<%= paths.build.css %>'
		}]
	}
}
