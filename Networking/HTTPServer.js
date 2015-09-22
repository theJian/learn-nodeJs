var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type' : 'text-plain'});
	response.end('Hello World\n');
}).listen(23333); // listen port 23333
