var port = Number(process.argv[2]);
var net = require('net');

var server = net.createServer(function(socket) {
    function padd(n) {
        if (n < 10) {
            return ("0" + n);
        } else {
            return n;
        }
    };

    console.log ("server connected");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var dayOfMonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var response = year + "-" + padd(month+1) + "-" + padd(dayOfMonth) + " " + padd(hours) + ":" + padd(minutes) + "\n";
    socket.write(response);
    socket.end();
});

server.listen(port);
console.log("TCP time server listening on port " + port);


/*
To test (on linux):

in one terminal tab, start your server likes this:

node ex10.js 3333

in another tab, test manually like this:

➜> telnet localhost 3333

Or, to be more explicit:

> telnet 127.0.0.1 3333

This is a basic tcp client, which exists on Windows too. In this case, because our server never waits for any input, it will connect, and immediately receive the response (the date-time string), and then immediately will terminate, because the server is closing the _connection_. But you can run telnet as many times as you want - and server will keep responding. This is the output you will see on the client side:

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
2014-10-28 23:11
Connection closed by foreign host.

As you can see, telnet is able to establish the connection (it met with the callback), it then instructs you on the details of it's protocol. Then it prints the data it immediately received. Then, it exits, because your server closed the connection.

And this is the output on the server side:

> node ex10.js 3333

TCP time server listening on port 3333
server connected
server connected
server connected
server connected
^C%

^ this is me stopping it with CTRL-C. Don't be worried about it "hanging" - it's not hanging, it's running =) Only the _connection_ closes in the callback function - the server doesn't stop running.
*/
