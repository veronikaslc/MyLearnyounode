var import_function = require ('./filter-ls');

// Observe how this function serves as a simple entry point
// of our little Command Line Interface. It only deals with parsing
// the CLI input, and passes it on to the "business logic" layer,
// which is encapsulated inside our module.
// This is a very typical software 'design pattern' - separation
// of concerns. One part of your code (whatever it might be - sometimes
// a Java class, sometimes a whole Java package, or even just a function)
// deals with I/O, another with business logic, another with low-level
// technical nuances need for that domain-specific logic, etc.
// NOTE: In real-world application, there's
// also a separate Data Access Layer, as you probably know already.
var firstArg = process.argv[2];
var secondArg = process.argv[3];
import_function(firstArg,
                secondArg,
                function (err, data) {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    data.forEach(function(it) {console.log(it)});
                });
