/* */ 
var test = require("tape");
var resolve = require("../index");
test('nonstring', function(t) {
  t.plan(1);
  resolve(555, function(err, res, pkg) {
    t.ok(err);
  });
});
