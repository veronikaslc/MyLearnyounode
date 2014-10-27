var fs = require('fs');
var fileName = process.argv[2];
//console.log(fileName);
var bufferString = fs.readFileSync(fileName).toString();
var lines = bufferString.split('\n');
console.log(lines.length-1);
