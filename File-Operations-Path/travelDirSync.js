var fs = require('fs');
var path = require('path');

/* travel directory */
function travel (dir, callback) {
	fs.readdirSync(dir).forEach(function (file) {
		var pathname = path.join(dir, file);
		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback);
		} else {
			callback(pathname);
		}
	});
}

travel(process.argv.slice(2)[0], function (pathname) {
	console.log(pathname);
});