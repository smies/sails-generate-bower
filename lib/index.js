/**
 * sails-generate-bower
 *
 * Usage:
 * `sails generate bower`
 *
 * @type {Object}
 */

var path = require('path');
var merge = require('./merge-json');
var insertAfter = require('./insert-after');

var scaffolding = path.resolve(__dirname, '../scaffolding');

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-bower) @ `'+scope.rootPath+'`...'); cb(); }},

		'./bower.json': {template: 'bower.json'},

		'./tasks/config/bower.js': {copy: path.join(scaffolding, '/tasks/config/bower.js')},
		'./tasks/register/compileAssets.js': { exec: insertAfter('grunt.registerTask(\'compileAssets\', [\n', '		\'bower:install\',\n') },

		//'./assets/vendor': {folder: {} },
		'./tasks/pipeline.js': { exec: insertAfter('var cssFilesToInject = [\n', '  \'vendor/**/*.css\',\n') },
		'./tasks/pipeline.js': { exec: insertAfter('var jsFilesToInject = [\n', '  \'vendor/**/*.js\',\n') },

		'./package.json': { exec: merge(path.join(scaffolding, 'package.json')) }
	}
};
