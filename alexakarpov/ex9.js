var url1 = process.argv [2];
var url2 = process.argv [3];
var url3 = process.argv [4];

var http = require ('http');

// You probably know about this weird thing - all 3 lines in the
// object literal here are the same thing. I.e., object's fields
// can be surrounded by quotes, or left 'naked', it's a same thing.
var state = {
		out1: "",
		'out2': "",
		"out3": ""
};

var count = 3;
function notify () {
		if (--count == 0) {
				console.log (state.out1);
				console.log (state.out2);
				console.log (state.out3);
		}
}				

function response_handler (response) {
		response.on('end', function() {
				notify()});
		response.on('data', function() {
		});
}

http.get (url1, function (response) {
		response.on ('data', function (chunk) {
				state.out1 +=chunk});
		response.on('end', function () {
				notify()});
});

http.get (url2, function (response) {
		response.on ('data', function (chunk) {
				state.out2 +=chunk});
		response.on('end', function () {
				notify()});
});

http.get (url3, function (response) {
		response.on('data', function (chunk) {
				state.out3 +=chunk});
		response.on('end', function () {
				notify()});
});
