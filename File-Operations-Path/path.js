var path = require('path');

var pathArr = [
	'/usr/share/',
	'//home/',
	'./Code',
	'.config',
	'../',
]

pathArr.forEach(function (item) {
	console.log(path.normalize(item));
});

console.log(path.join(pathArr[0], pathArr[1], pathArr[2])); // "/usr/share/home/Code"

console.log(path.extname('./path.js')); // ".js"