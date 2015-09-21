/*
BOM(byte order mark)用于标记一个文本文件使用Unicode编码, 其本身是一个Unicode字符, 位于文本文件头部.
*/

var fs = require('fs');

function readText (pathname) {
	var bin = fs.readFileSync(pathname);
	if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
		bin = bin.slice(3);
	}

	return bin.toString('utf-8');
}

console.log(readText(process.argv[2]));