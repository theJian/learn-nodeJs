var fs = require('fs');
var https = require('https');

/* HTTPS与创建HTTP服务器相比，多了一个options对象，通过key和cert字段指定了HTTPS服务器使用的私钥和公钥 */
var options = {
	key: fs.readFileSync('./ssl/default.key'),
	cert: fs.readFileSync('./ssl/default.cer')
};

var server = https.createServer(options, function (request, respose) {
	// ...
});
