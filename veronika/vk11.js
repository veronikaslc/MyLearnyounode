var http = require('http');
var fs = require('fs');
//var strftime= require('strftime');
var port = process.argv[2];
var path = process.argv[3];
var serv = http.createServer(function (req, res){
	var filestream = fs.createReadStream(path);
	filestream.pipe(res);
    });

serv.listen(port);