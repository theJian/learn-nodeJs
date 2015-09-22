var https = require('https');

var options = {
	hostname: 'github.com',
	port: 443,
	path: '/',
	method: 'GET',
	// rejectUnauthorized: false //禁用对证书有效性的检查
};

var request = https.request(options, function (response) {});

request.end();