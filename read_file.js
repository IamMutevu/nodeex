// Get file system reference
var fs = require('fs')

// Reading a file
fs.readFile('calc.js', 'utf8', function(err, data){
    console.log(data)
})