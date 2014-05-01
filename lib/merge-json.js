var fs = require('fs');
var path = require('path');
var _ = require('lodash');

_.defaults = require('merge-defaults');


module.exports = function(inputPath, filter, secondInputPath) {
	return function(scope, cb) {
		var outputPath = scope.rootPath;
		merge(inputPath, outputPath, filter, secondInputPath, cb);
	}
}

function merge(inputFile, outputFile, filter, secondInputFile, cb) {
	fs.readFile(inputFile, {encoding: 'utf8'}, function(err, template) {
		if(err) return cb(err);

		secondInputFile = secondInputFile ? secondInputFile : outputFile;
		fs.readFile(secondInputFile, {encoding: 'utf8'}, function(err, defaultsSource) {
			if(err) return cb(err);

			template = JSON.parse(template);
			defaultsSource = JSON.parse(defaultsSource);

			if (filter)
				defaultsSource = _.pick(defaultsSource, filter);

			_.defaults(template, defaultsSource);
			fs.writeFile(outputFile, JSON.stringify(template, null, '  '), cb);
		});
	});
}
