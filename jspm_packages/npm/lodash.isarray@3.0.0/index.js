/* */ 
(function(process) {
  var arrayTag = '[object Array]',
      funcTag = '[object Function]';
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
  var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isArray = nativeIsArray || function(value) {
    return (isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag) || false;
  };
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
  module.exports = isArray;
})(require("process"));
