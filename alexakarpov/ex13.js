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
        var dateString = params.query.iso.toString ();
        var date = new Date(dateString);

        if (pathname == '/api/unixtime') {
            console.log("Unix time requested");
            body = {'unixtime': date.getTime ()};
            console.log(body);
        } else if (pathname == "/api/parsetime") {
            body = {'hour': date.getHours(),
                    'minute': date.getMinutes(),
                    'second': date.getSeconds()
                   }
        }
        response.writeHead (200);
        response.end (JSON.stringify(body));
    }
};

var server = http.createServer (handler);
server.listen (port);
console.log ("Server listening on port " + port);
