var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
		/* 
			 Note an important difference form the previous
			 from the previous exercise #7. We are specificall
			 asked to _collect_ responses, which means, it is
			 possible that the response will NOT arrive in a
			 single value at once, but will come as a sequence
			 of data chunks. Such is the nature of the distributed
			 world - you don't have a luxury of always having data
			 right here in the memory. Sometimes you have to wait
			 for the data to be sent from a remote process,
			 and it may not come all at once. Well, you know that,
			 you've worked on TCP protocol stuff.
			 So here we will end up our on-data callback invoked
			 more than once. Hence we need to accumulate all the
			 chunks, until we receive the 'end' event, which will
			 signify that the response is all here.
		*/
		var output = "";
		response.on ('data', function (chunk) {
				output+=chunk;
		});
		response.on ('end', function() {
				console.log (output.length);
				console.log (output);
		});
});
