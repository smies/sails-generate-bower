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

var templates = require('path').resolve(__dirname,'../templates');

module.exports = {

	templatesDirectory: templates,

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-bower) @ `'+scope.rootPath+'`...'); cb(); }},

		'./bower.json': { exec: merge(path.join(templates, 'bower.json'), ['name', 'version', 'author', 'authors', 'licence', 'private'], './package.json')},

		'./tasks/config/bower.js': {copy: path.join(templates, '/tasks/config/bower.js')},
		'./tasks/register/compileAssets.js': { exec: insertAfter([ ['grunt.registerTask(\'compileAssets\', [\n', '		\'bower:install\',\n'] ]) },

		'./tasks/pipeline.js': { exec: insertAfter([ ['var cssFilesToInject = [\n', '  \'vendor/**/*.css\',\n'],
			                                           ['var jsFilesToInject = [\n', '  \'vendor/**/*.js\',\n'] ]) },

		'./package.json': { exec: merge(path.join(templates, 'package.json')) }
	}
};
