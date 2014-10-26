// Our only global variable - Node's own 'fs' module..
var fs = require('fs');


// Input is just a list of strings and a regexp, and return value
// is just a sublist of those strings that do match the regexp.
function filter_ls(listOfStrings, re) {
		return listOfStrings.filter(function(value) {
				return value.match(re);
		});
}

// This function serves as a simple entry point
// of our little Command Line Interface. It only deals with parsing
// the CLI input, and passes it on to the "business logic" layer.
// This is a very typical software 'design pattern' - separation
// of concerns. One part of your code (whatever it might be - sometimes
// a Java class, sometimes a whole Java package, or even just a function)
// deals with I/O, another with business logic, another with low-level
// technical nuances need for that domain-specific logic, etc.
// NOTE: In real-world application, there's
// also a separate Data Access Layer, as you probably know already.
function wrap_cli() {
		if(process.argv.length != 4) {
				console.error("This command take 2 command line arguements! Aborting.");
				return -1;
		}
		var dirPath = process.argv[2];
		var extension = process.argv[3];
		// As you can see, this function is dumb, by design. All it needs to know
    // is that there should be 2 command line arguments - and that there's some
		// other function that knows what to do with them.
		return invoke_filter_ls(dirPath, extension);
}
		
// This function is "business layer". It doesn't have to deal with things like
// input validation, parsing command line args, etc. 
function invoke_filter_ls(dirPath, fileExtension) {

		// this will match a string with a period character, followed by the string
		// passed in the 'extension' parameter, and followed by a newline.

		var re = new RegExp('.' + fileExtension + '$');

		// since 'fs' is a _global_ variable, it is accessible from anywhere
		fs.readdir(dirPath, function(err, data) {
				if (err) {
						throw err;
				}
				filter_ls(data, re).forEach(function(it) { console.log(it)});
		})};

module.exports = wrap_cli;;
