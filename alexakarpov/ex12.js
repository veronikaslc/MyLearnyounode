var http = require('http');

var port = process.argv[2];

function handler (request, response) {
    if (request.method == 'POST') {
				console.log('received a POST');
        var requestBody = '';
				var responseBody = '';
        request.on ('data', function (chunk) {
						console.log("handling 'data' event");
            requestBody += chunk;
						console.log("chunk is: " + chunk + ", data is: " + requestBody);
        });

        request.on ('end', function () {
						console.log("handling 'end' event");
            response.statusCode = 200;
						console.log("requestBody at this point is: " + requestBody);
            responseBody = requestBody.toUpperCase ();
						response.end(responseBody);
				})}
		else {
				console.log('received another kind of request');
				response.writeHead(405);
		}
		
	
}

var server = http.createServer(handler);
server.listen(port);
console.log("Server listening on port " + port);
