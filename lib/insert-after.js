var fs = require('fs');
var path = require('path');
var _ = require('lodash');


module.exports = function(pairs) {
	return function(scope, cb) {
		insert(scope.rootPath, pairs, cb);
	}
}

function insert(path, pairs, cb) {
	fs.readFile(path, {encoding: 'utf8'}, function(err, contents) {
		if(err) return cb(err);

		_(pairs).forEach(function (pair) {
			contents = contents.replace(pair[0], pair[0] + pair[1]);
		}).value();

		fs.writeFile(path, contents, cb);
	});
}
