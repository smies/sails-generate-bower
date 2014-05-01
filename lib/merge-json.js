var fs = require('fs');
var path = require('path');
var _ = require('lodash');

_.defaults = require('merge-defaults');


module.exports = function(inputPath) {
	return function(scope, cb) {
		console.log(inputPath);
		var outputPath = scope.rootPath;
		merge(inputPath, outputPath, cb);
	}
}

function merge(inputFile, outputFile, cb) {
	fs.readFile(inputFile, {encoding: 'utf8'}, function(err, from) {
		if(err) return cb(err);
		fs.readFile(outputFile, {encoding: 'utf8'}, function(err, to) {
			if(err) return cb(err);

			from = JSON.parse(from);
			to = JSON.parse(to);

			_.defaults(to, from);
			fs.writeFile(outputFile, JSON.stringify(to, null, '  '), cb);
		});
	});
}
