module.exports = function(grunt) {
    var path = require('path');
	require('load-grunt-config')(grunt, {
		configPath: [
			path.join(process.cwd(), 'grunt_tasks'),
			path.join(process.cwd(), 'grunt_tasks/config')
		],
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
