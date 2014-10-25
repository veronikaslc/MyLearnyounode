var fs = require('fs');
var num = 0;
fs.readFile(process.argv[2], 'utf8', function callback(err, data){
	if (!err) {
		num=data.split('\n').length-1;
	} else throw err;
});
console.log(num);