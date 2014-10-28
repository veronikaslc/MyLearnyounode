var fs = require('fs');

function filterMe(listOfFiles, re){
	return listOfFiles.filter(function(value){return value.match(re);});
}

var supportFilter = function (path, ext, callback){
 	var re = '.'+ext+'$';

	fs.readdir(path, function (err, list){
		if (err) return callback(err);
		callback(null, filterMe(list,re))
	});
}

module.exports = supportFilter;
