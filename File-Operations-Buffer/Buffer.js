var bin = new Buffer('Buffer', 'utf-8'); //string to buffer
console.log(bin); // <Buffer 42 75 66 66 65 72>
var str = bin.toString('utf-8'); //buffer to string
console.log(str); // "Buffer"

var dup = new Buffer(bin.length);
bin.copy(dup); // copy bin to dup
console.log(dup); // <Buffer 42 75 66 66 65 72>

dup[0] = 0x97; // change buffer by using [], Like C Array
console.log(dup);