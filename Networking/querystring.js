var querystring = require('querystring');
// querystring 用于实现URL参数字符串与参数对象的互相转换

console.log( querystring.parse('foo=bar&baz=qux&baz=quux&corge') );
// => { foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

console.log( querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// => "foo=bar&baz=qux&baz=quux&corge="