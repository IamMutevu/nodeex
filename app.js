// Import module that contains the createServer function 
var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("Welcome Back Alien!!!")

}).listen(3000)