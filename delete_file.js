var fs = require('fs')

fs.unlink('output.js',function(err){
    console.log("File deleted")
})