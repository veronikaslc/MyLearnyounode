var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    var lines = data.toString().split('\n');
    console.log(lines.length-1);
});
