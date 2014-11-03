var http = require ('http');
var port = process.argv [2];
var url = require('url');


function handler (request, response) {
		console.log ("Handling a request...");
		if (request.method !== 'GET') {
				console.log ("An unsupported request type.");
				response.writeHead (405);
				response.end ("An unsupported request type.");
		}
		else {
				console.log ("Handling a GET with params:");
				var params = url.parse(request.url, true);
				console.log(params);
				var pathname = params.pathname;
				var body = null;
				if (pathname == '/api/unixtime') {
						console.log("Unix time requested");
						body = {'unixtime': Date.now ()};
						console.log(body);
				} else if (pathname == "/api/parsetime") {
						console.log("ISO date provided");
						var query = params.query;					
						console.log ("query: " + query);
						rawDate = query.iso.toString ();
						
						var re = /\d{4}-\d{2}-\d{2}T(\d{2}):(\d{2}):(\d{2})/;
						var dateMatch = rawDate.match(re);
						body = {'hour': dateMatch[1],
										'minute': dateMatch[2],
										'second': dateMatch[3]}
				}

				response.writeHead (200);
				response.end (JSON.stringify(body));
		}
};

var server = http.createServer (handler);
server.listen (port);
console.log ("Server listening on port " + port);

/*
/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }
*/
