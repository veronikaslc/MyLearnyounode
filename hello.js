var fs = require('fs');
var path = require('path');
var ext = '.'+process.argv[3];
fs.readdir(process.argv[2], function callback(err, list){
	if (err) throw err;
	for (i=0; i<list.length; i++) {
		if (path.extname(list[i]) == ext)
			console.log(list[i]);
		}
});
