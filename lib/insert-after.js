var fs = require('fs');
var path = require('path');


module.exports = function(searchStr, insertStr) {
	return function(scope, cb) {
		insert(scope.rootPath, searchStr, insertStr, cb);
	}
}

function insert(path, searchStr, insertStr, cb) {
	fs.readFile(path, {encoding: 'utf8'}, function(err, from) {
		if(err) return cb(err);

		var to = from.replace(searchStr, searchStr + insertStr);

		fs.writeFile(path, to, cb);
	});
}
