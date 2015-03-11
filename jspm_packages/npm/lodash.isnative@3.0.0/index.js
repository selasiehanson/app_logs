/* */ 
(function(process) {
  var funcTag = '[object Function]';
  var reHostCtor = /^\[object .+?Constructor\]$/;
  var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);
  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : (value + '');
  }
  function isObjectLike(value) {
    return (value && typeof value == 'object') || false;
  }
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var objToString = objectProto.toString;
  var reNative = RegExp('^' + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (objToString.call(value) == funcTag) {
      return reNative.test(fnToString.call(value));
    }
    return (isObjectLike(value) && reHostCtor.test(value)) || false;
  }
  function escapeRegExp(string) {
    string = baseToString(string);
    return (string && reHasRegExpChars.test(string)) ? string.replace(reRegExpChars, '\\$&') : string;
  }
  module.exports = isNative;
})(require("process"));
