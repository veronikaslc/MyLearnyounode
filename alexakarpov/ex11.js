var http = require ('http');
var fs = require ('fs');

var port = process.argv [2];
var filePath = process.argv [3];

function serverCallback(request, response) {
		console.log("Executing the callback.");
    var body = '';
    var fileStream = fs.createReadStream(filePath);
		console.log(fileStream);
    fileStream.pipe(response);
};

var server = http.createServer (serverCallback);
server.listen(port);
console.log("HTTP server listening on port " + port);
