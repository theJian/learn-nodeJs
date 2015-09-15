var foo = require("./foo");
exports.includeModule = foo.name;
exports.sayHello = function () {
	console.log("Hello World!");
}