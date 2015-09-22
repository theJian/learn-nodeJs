/*******************************************************************
                           href
 -----------------------------------------------------------------
                            host              path
                      --------------- ----------------------------
 http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
 -----    ---------   --------   ---- -------- ------------- -----
protocol     auth     hostname   port pathname     search     hash
                                                ------------
                                                   query
*******************************************************************/

var url = require('url');

var urlObj = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/

urlObj = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true);

console.log(urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: { query: 'string' },
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/

console.log(url.format(urlObj)); // http://user:pass@host.com:8080/p/a/t/h?query=string#hash

console.log(url.resolve('http://www.example.com/foo/bar', '../baz')); //http://www.example.com/baz
