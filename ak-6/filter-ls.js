// Our only global variable - Node's own 'fs' module..
var fs = require('fs');


// Input is just a list of strings and a regexp, and return value
// is just a sublist of those strings that do match the regexp.
function filter_ls(listOfStrings, re) {
		return listOfStrings.filter(function(value) {
				return value.match(re);
		});
}

// This function is "business layer".
// It doesn't have to deal with things like
// input validation, parsing command line args, etc. In fact,
// it doesn't even deal with printing things out! - that would not be
// "business logic', strictly speaking. That printing stuff out
// is done on the "cilent side" - in our case, in the callback function
// passed in here, which, after seeing it got not an error, but data,
// will happily proceed to do what IT knows needs to be done. This
// module here hasn't a slightest idea how the data it provides is used.
// Such 'decoupling' is a big deal in software development world.

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

