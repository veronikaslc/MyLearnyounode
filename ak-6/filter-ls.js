// Our only global variable - Node's own 'fs' module..
var fs = require('fs');


// Input is just a list of strings and a regexp, and return value
// is just a sublist of those strings that do match the regexp.
function filter_ls(listOfStrings, re) {
		return listOfStrings.filter(function(value) {
				return value.match(re);
		});
}

// This function is "business layer". It doesn't have to deal with things like
// input validation, parsing command line args, etc. 
var invoke_filter_ls = function(dirPath, fileExtension, callback) {
		
		// this will match a string with a period character, followed by the string
		// passed in the 'extension' parameter, and followed by a newline.

		var re = new RegExp('.' + fileExtension + '$');

		// since 'fs' is a _global_ variable, it is accessible from anywhere
    fs.readdir(dirPath, function(err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, filter_ls(data, re));
    })};

module.exports = invoke_filter_ls;

