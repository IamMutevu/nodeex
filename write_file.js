var fs = require('fs')

fs.writeFile('output.js', 'console.log("Done")', function(err){
    console.log("Operation successful")
})