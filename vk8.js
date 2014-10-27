var http = require('http');
var bl=require('bl');
var url = process.argv[2];
var stream = '';
http.get(url, function callback(response){
	//response.setEncoding('utf8');
	response.pipe(bl( function(err, data){	
		if (err) console.error;	
		stream+=data.toString();
	}))	
	response.on('end', function(){
		console.log(stream.length);
		console.log(stream);
	})
});
