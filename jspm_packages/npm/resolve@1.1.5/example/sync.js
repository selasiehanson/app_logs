/* */ 
var resolve = require("../index");
var res = resolve.sync('tap', {basedir: __dirname});
console.log(res);
