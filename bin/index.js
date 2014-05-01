/**
 * Module dependencies
 */

var sailsgen = require('sails-generate')
	, path = require('path');



//
// This script exists so we can run our generator
// directly from the command-line for convenience
// during development.
//

var scope = {
	generatorType: 'bower',
	rootPath: process.cwd(),
	modules: {
		'bower': path.resolve(__dirname, '../lib')
	},
};

sailsgen(scope, function (err) {
	if (err) throw err;

	// It worked.
	console.log('Done.');
});

