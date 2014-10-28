var http = require('http');
var bl=require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var stream = {srt1:'', srt2:'', srt3:'', f1:false, f2:false, f3:false};

http.get(url1, function callback(response){	
	response.pipe(bl( function(err, data){	
		if (err)  console.error	
		else stream.str1+=data.toString();
	}))	
	response.on('end', function(){
		stream.f1=true;
		console.log(stream.str1);		
		if (stream.f2) console.log(stream.str2)
		if (stream.f3&stream.f2) console.log(stream.str3)	
	})
});

http.get(url2, function callback(response){	
	response.pipe(bl( function(err, data){	
		if (err) console.error	
		else stream.str2+=data.toString();
	}))	
	response.on('end', function(){
		stream.f2=true;	
		if (stream.f1) console.log(stream.str2)
		if (stream.f3) console.log(stream.str3)	
	})
});

http.get(url3, function callback(response){	
	response.pipe(bl( function(err, data){	
		if (err) console.error	
		else stream.str3+=data.toString();
	}))	
	response.on('end', function(){
		stream.f3=true;	
		if (stream.f1&stream.f2) console.log(stream.str3)			
	})
});
