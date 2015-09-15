var fs = require('fs');

// Not a good solution for big files
function copy (src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src)); // fs.readFileSync(src) reads file contents from src, and writes to dst use fs.writeFileSync(dst, src)
}

function main (argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));