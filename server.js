// server.js
var mod = require("./module");
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, { "Content-type":  "text/plain"});
	console.log("RANDOM WORD:", mod.random());
	response.write(mod.random());
	response.end();
}).listen(8888);

