/* */ 
"format cjs";
(function(process) {
  ;
  (function(window, undefined) {
    var freeExports = typeof exports == 'object' && exports;
    var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal) {
      window = freeGlobal;
    }
    var arrayRef = [],
        objectRef = {};
    var idCounter = 0;
    var indicatorObject = objectRef;
    var largeArraySize = 30;
    var oldDash = window._;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reFlags = /\w*$/;
    var reNative = RegExp('^' + (objectRef.valueOf + '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$');
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reInterpolate = /<%=([\s\S]+?)%>/g;
    var reNoMatch = /($^)/;
    var reUnescapedHtml = /[&<>"']/g;
    var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
    var shadowed = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    var templateCounter = 0;
    var ceil = Math.ceil,
        concat = arrayRef.concat,
        floor = Math.floor,
        getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
        hasOwnProperty = objectRef.hasOwnProperty,
        push = arrayRef.push,
        toString = objectRef.toString;
    var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind,
        nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeIsFinite = window.isFinite,
        nativeIsNaN = window.isNaN,
        nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeRandom = Math.random;
    var argsClass = '[object Arguments]',
        arrayClass = '[object Array]',
        boolClass = '[object Boolean]',
        dateClass = '[object Date]',
        funcClass = '[object Function]',
        numberClass = '[object Number]',
        objectClass = '[object Object]',
        regexpClass = '[object RegExp]',
        stringClass = '[object String]';
    var isIeOpera = !!window.attachEvent,
        isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);
    var isBindFast = nativeBind && !isV8;
    var isKeysFast = nativeKeys && (isIeOpera || isV8);
    var hasDontEnumBug;
    var hasEnumPrototype;
    var iteratesOwnLast;
    var hasObjectSpliceBug = (hasObjectSpliceBug = {
      '0': 1,
      'length': 1
    }, arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0]);
    var nonEnumArgs = true;
    (function() {
      var props = [];
      function ctor() {
        this.x = 1;
      }
      ctor.prototype = {
        'valueOf': 1,
        'y': 1
      };
      for (var prop in new ctor) {
        props.push(prop);
      }
      for (prop in arguments) {
        nonEnumArgs = !prop;
      }
      hasDontEnumBug = !/valueOf/.test(props);
      hasEnumPrototype = ctor.propertyIsEnumerable('prototype');
      iteratesOwnLast = props[0] != 'x';
    }(1));
    var argsAreObjects = arguments.constructor == Object;
    var noArgsClass = !isArguments(arguments);
    var noCharByIndex = ('x'[0] + Object('x')[0]) != 'xx';
    try {
      var noNodeClass = toString.call(document) == objectClass && !({'toString': 0} + '');
    } catch (e) {}
    var cloneableClasses = {};
    cloneableClasses[funcClass] = false;
    cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var stringEscapes = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    function lodash(value) {
      if (value && typeof value == 'object' && value.__wrapped__) {
        return value;
      }
      if (!(this instanceof lodash)) {
        return new lodash(value);
      }
      this.__wrapped__ = value;
    }
    lodash.templateSettings = {
      'escape': /<%-([\s\S]+?)%>/g,
      'evaluate': /<%([\s\S]+?)%>/g,
      'interpolate': reInterpolate,
      'variable': '',
      'imports': {'_': lodash}
    };
    var iteratorTemplate = function(obj) {
      var __p = 'var index, iterable = ' + (obj.firstArg) + ', result = iterable;\nif (!iterable) return result;\n' + (obj.top) + ';\n';
      if (obj.arrays) {
        __p += 'var length = iterable.length; index = -1;\nif (' + (obj.arrays) + ') {  ';
        if (obj.noCharByIndex) {
          __p += '\n  if (isString(iterable)) {\n    iterable = iterable.split(\'\')\n  }  ';
        }
        ;
        __p += '\n  while (++index < length) {\n    ' + (obj.loop) + '\n  }\n}\nelse {  ';
      } else if (obj.nonEnumArgs) {
        __p += '\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += \'\';\n      ' + (obj.loop) + '\n    }\n  } else {  ';
      }
      ;
      if (obj.hasEnumPrototype) {
        __p += '\n  var skipProto = typeof iterable == \'function\';\n  ';
      }
      ;
      if (obj.isKeysFast && obj.useHas) {
        __p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ';
        if (obj.hasEnumPrototype) {
          __p += 'if (!(skipProto && index == \'prototype\')) {\n  ';
        }
        ;
        __p += (obj.loop) + '';
        if (obj.hasEnumPrototype) {
          __p += '}\n';
        }
        ;
        __p += '  }  ';
      } else {
        __p += '\n  for (index in iterable) {';
        if (obj.hasEnumPrototype || obj.useHas) {
          __p += '\n    if (';
          if (obj.hasEnumPrototype) {
            __p += '!(skipProto && index == \'prototype\')';
          }
          if (obj.hasEnumPrototype && obj.useHas) {
            __p += ' && ';
          }
          if (obj.useHas) {
            __p += 'hasOwnProperty.call(iterable, index)';
          }
          ;
          __p += ') {    ';
        }
        ;
        __p += (obj.loop) + ';    ';
        if (obj.hasEnumPrototype || obj.useHas) {
          __p += '\n    }';
        }
        ;
        __p += '\n  }  ';
      }
      ;
      if (obj.hasDontEnumBug) {
        __p += '\n\n  var ctor = iterable.constructor;\n    ';
        for (var k = 0; k < 7; k++) {
          __p += '\n  index = \'' + (obj.shadowed[k]) + '\';\n  if (';
          if (obj.shadowed[k] == 'constructor') {
            __p += '!(ctor && ctor.prototype === iterable) && ';
          }
          ;
          __p += 'hasOwnProperty.call(iterable, index)) {\n    ' + (obj.loop) + '\n  }    ';
        }
        ;
      }
      ;
      if (obj.arrays || obj.nonEnumArgs) {
        __p += '\n}';
      }
      ;
      __p += (obj.bottom) + ';\nreturn result';
      return __p;
    };
    var defaultsIteratorOptions = {
      'args': 'object, source, guard',
      'top': 'var args = arguments,\n' + '    argsIndex = 0,\n' + "    argsLength = typeof guard == 'number' ? 2 : args.length;\n" + 'while (++argsIndex < argsLength) {\n' + '  iterable = args[argsIndex];\n' + '  if (iterable && objectTypes[typeof iterable]) {',
      'loop': "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
      'bottom': '  }\n}'
    };
    var eachIteratorOptions = {
      'args': 'collection, callback, thisArg',
      'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
      'arrays': "typeof length == 'number'",
      'loop': 'if (callback(iterable[index], index, collection) === false) return result'
    };
    var forOwnIteratorOptions = {
      'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
      'arrays': false
    };
    function cachedContains(array, fromIndex, largeSize) {
      fromIndex || (fromIndex = 0);
      var length = array.length,
          isLarge = (length - fromIndex) >= (largeSize || largeArraySize);
      if (isLarge) {
        var cache = {},
            index = fromIndex - 1;
        while (++index < length) {
          var key = array[index] + '';
          (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index]);
        }
      }
      return function(value) {
        if (isLarge) {
          var key = value + '';
          return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1;
        }
        return indexOf(array, value, fromIndex) > -1;
      };
    }
    function charAtCallback(value) {
      return value.charCodeAt(0);
    }
    function compareAscending(a, b) {
      var ai = a.index,
          bi = b.index;
      a = a.criteria;
      b = b.criteria;
      if (a !== b) {
        if (a > b || typeof a == 'undefined') {
          return 1;
        }
        if (a < b || typeof b == 'undefined') {
          return -1;
        }
      }
      return ai < bi ? -1 : 1;
    }
    function createBound(func, thisArg, partialArgs, rightIndicator) {
      var isFunc = isFunction(func),
          isPartial = !partialArgs,
          key = thisArg;
      if (isPartial) {
        partialArgs = thisArg;
      }
      if (!isFunc) {
        thisArg = func;
      }
      function bound() {
        var args = arguments,
            thisBinding = isPartial ? this : thisArg;
        if (!isFunc) {
          func = thisArg[key];
        }
        if (partialArgs.length) {
          args = args.length ? (args = slice(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs;
        }
        if (this instanceof bound) {
          noop.prototype = func.prototype;
          thisBinding = new noop;
          noop.prototype = null;
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      return bound;
    }
    function createCallback(func, thisArg, argCount) {
      if (func == null) {
        return identity;
      }
      var type = typeof func;
      if (type != 'function') {
        if (type != 'object') {
          return function(object) {
            return object[func];
          };
        }
        var props = keys(func);
        return function(object) {
          var length = props.length,
              result = false;
          while (length--) {
            if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
              break;
            }
          }
          return result;
        };
      }
      if (typeof thisArg != 'undefined') {
        if (argCount === 1) {
          return function(value) {
            return func.call(thisArg, value);
          };
        }
        if (argCount === 2) {
          return function(a, b) {
            return func.call(thisArg, a, b);
          };
        }
        if (argCount === 4) {
          return function(accumulator, value, index, object) {
            return func.call(thisArg, accumulator, value, index, object);
          };
        }
        return function(value, index, object) {
          return func.call(thisArg, value, index, object);
        };
      }
      return func;
    }
    function createIterator() {
      var data = {
        'hasDontEnumBug': hasDontEnumBug,
        'hasEnumPrototype': hasEnumPrototype,
        'isKeysFast': isKeysFast,
        'nonEnumArgs': nonEnumArgs,
        'noCharByIndex': noCharByIndex,
        'shadowed': shadowed,
        'arrays': 'isArray(iterable)',
        'bottom': '',
        'loop': '',
        'top': '',
        'useHas': true
      };
      for (var object,
          index = 0; object = arguments[index]; index++) {
        for (var key in object) {
          data[key] = object[key];
        }
      }
      var args = data.args;
      data.firstArg = /^[^,]+/.exec(args)[0];
      var factory = Function('createCallback, hasOwnProperty, isArguments, isArray, isString, ' + 'objectTypes, nativeKeys', 'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}');
      return factory(createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys);
    }
    var each = createIterator(eachIteratorOptions);
    function escapeStringChar(match) {
      return '\\' + stringEscapes[match];
    }
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }
    function isNode(value) {
      return typeof value.toString != 'function' && typeof(value + '') == 'string';
    }
    function noop() {}
    function slice(array, start, end) {
      start || (start = 0);
      if (typeof end == 'undefined') {
        end = array ? array.length : 0;
      }
      var index = -1,
          length = end - start || 0,
          result = Array(length < 0 ? 0 : length);
      while (++index < length) {
        result[index] = array[start + index];
      }
      return result;
    }
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }
    function isArguments(value) {
      return toString.call(value) == argsClass;
    }
    if (noArgsClass) {
      isArguments = function(value) {
        return value ? hasOwnProperty.call(value, 'callee') : false;
      };
    }
    var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {'useHas': false});
    var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);
    var isArray = nativeIsArray || function(value) {
      return (argsAreObjects && value instanceof Array) || toString.call(value) == arrayClass;
    };
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      if ((hasEnumPrototype && typeof object == 'function') || (nonEnumArgs && object.length && isArguments(object))) {
        return shimKeys(object);
      }
      return nativeKeys(object);
    };
    function shimIsPlainObject(value) {
      var result = false;
      if (!(value && typeof value == 'object') || isArguments(value)) {
        return result;
      }
      var ctor = value.constructor;
      if ((!isFunction(ctor) && (!noNodeClass || !isNode(value))) || ctor instanceof ctor) {
        if (iteratesOwnLast) {
          forIn(value, function(value, key, object) {
            result = !hasOwnProperty.call(object, key);
            return false;
          });
          return result === false;
        }
        forIn(value, function(value, key) {
          result = key;
        });
        return result === false || hasOwnProperty.call(value, result);
      }
      return result;
    }
    function shimKeys(object) {
      var result = [];
      forOwn(object, function(value, key) {
        result.push(key);
      });
      return result;
    }
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    var htmlUnescapes = invert(htmlEscapes);
    var assign = createIterator(defaultsIteratorOptions, {
      'top': defaultsIteratorOptions.top.replace(';', ';\n' + "if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n" + '  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n' + "} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n" + '  callback = args[--argsLength];\n' + '}'),
      'loop': 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
    });
    function clone(value, deep, callback, thisArg, stackA, stackB) {
      var result = value;
      if (typeof deep == 'function') {
        thisArg = callback;
        callback = deep;
        deep = false;
      }
      if (typeof callback == 'function') {
        callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 1);
        result = callback(result);
        var done = typeof result != 'undefined';
        if (!done) {
          result = value;
        }
      }
      var isObj = isObject(result);
      if (isObj) {
        var className = toString.call(result);
        if (!cloneableClasses[className] || (noNodeClass && isNode(result))) {
          return result;
        }
        var isArr = isArray(result);
      }
      if (!isObj || !deep) {
        return isObj && !done ? (isArr ? slice(result) : assign({}, result)) : result;
      }
      var ctor = ctorByClass[className];
      switch (className) {
        case boolClass:
        case dateClass:
          return done ? result : new ctor(+result);
        case numberClass:
        case stringClass:
          return done ? result : new ctor(result);
        case regexpClass:
          return done ? result : ctor(result.source, reFlags.exec(result));
      }
      stackA || (stackA = []);
      stackB || (stackB = []);
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      if (!done) {
        result = isArr ? ctor(result.length) : {};
        if (isArr) {
          if (hasOwnProperty.call(value, 'index')) {
            result.index = value.index;
          }
          if (hasOwnProperty.call(value, 'input')) {
            result.input = value.input;
          }
        }
      }
      stackA.push(value);
      stackB.push(result);
      (isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {
        result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
      });
      return result;
    }
    function cloneDeep(value, callback, thisArg) {
      return clone(value, true, callback, thisArg);
    }
    var defaults = createIterator(defaultsIteratorOptions);
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }
    function has(object, property) {
      return object ? hasOwnProperty.call(object, property) : false;
    }
    function invert(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};
      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }
    function isBoolean(value) {
      return value === true || value === false || toString.call(value) == boolClass;
    }
    function isDate(value) {
      return value instanceof Date || toString.call(value) == dateClass;
    }
    function isElement(value) {
      return value ? value.nodeType === 1 : false;
    }
    function isEmpty(value) {
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value),
          length = value.length;
      if ((className == arrayClass || className == stringClass || className == argsClass || (noArgsClass && isArguments(value))) || (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
        return !length;
      }
      forOwn(value, function() {
        return (result = false);
      });
      return result;
    }
    function isEqual(a, b, callback, thisArg, stackA, stackB) {
      var whereIndicator = callback === indicatorObject;
      if (callback && !whereIndicator) {
        callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 2);
        var result = callback(a, b);
        if (typeof result != 'undefined') {
          return !!result;
        }
      }
      if (a === b) {
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a,
          otherType = typeof b;
      if (a === a && (!a || (type != 'function' && type != 'object')) && (!b || (otherType != 'function' && otherType != 'object'))) {
        return false;
      }
      if (a == null || b == null) {
        return a === b;
      }
      var className = toString.call(a),
          otherClass = toString.call(b);
      if (className == argsClass) {
        className = objectClass;
      }
      if (otherClass == argsClass) {
        otherClass = objectClass;
      }
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          return +a == +b;
        case numberClass:
          return a != +a ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
        case regexpClass:
        case stringClass:
          return a == b + '';
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        if (a.__wrapped__ || b.__wrapped__) {
          return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
        }
        if (className != objectClass || (noNodeClass && (isNode(a) || isNode(b)))) {
          return false;
        }
        var ctorA = !argsAreObjects && isArguments(a) ? Object : a.constructor,
            ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor;
        if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB)) {
          return false;
        }
      }
      stackA || (stackA = []);
      stackB || (stackB = []);
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var size = 0;
      result = true;
      stackA.push(a);
      stackB.push(b);
      if (isArr) {
        length = a.length;
        size = b.length;
        result = size == a.length;
        if (!result && !whereIndicator) {
          return result;
        }
        while (size--) {
          var index = length,
              value = b[size];
          if (whereIndicator) {
            while (index--) {
              if ((result = isEqual(a[index], value, callback, thisArg, stackA, stackB))) {
                break;
              }
            }
          } else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) {
            break;
          }
        }
        return result;
      }
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          size++;
          return (result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB));
        }
      });
      if (result && !whereIndicator) {
        forIn(a, function(value, key, a) {
          if (hasOwnProperty.call(a, key)) {
            return (result = --size > -1);
          }
        });
      }
      return result;
    }
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }
    function isFunction(value) {
      return typeof value == 'function';
    }
    if (isFunction(/x/)) {
      isFunction = function(value) {
        return value instanceof Function || toString.call(value) == funcClass;
      };
    }
    function isObject(value) {
      return value ? objectTypes[typeof value] : false;
    }
    function isNaN(value) {
      return isNumber(value) && value != +value;
    }
    function isNull(value) {
      return value === null;
    }
    function isNumber(value) {
      return typeof value == 'number' || toString.call(value) == numberClass;
    }
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && typeof value == 'object')) {
        return false;
      }
      var valueOf = value.valueOf,
          objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
      return objProto ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value)) : shimIsPlainObject(value);
    };
    function isRegExp(value) {
      return value instanceof RegExp || toString.call(value) == regexpClass;
    }
    function isString(value) {
      return typeof value == 'string' || toString.call(value) == stringClass;
    }
    function isUndefined(value) {
      return typeof value == 'undefined';
    }
    function merge(object, source, deepIndicator) {
      var args = arguments,
          index = 0,
          length = 2;
      if (!isObject(object)) {
        return object;
      }
      if (deepIndicator === indicatorObject) {
        var callback = args[3],
            stackA = args[4],
            stackB = args[5];
      } else {
        stackA = [];
        stackB = [];
        if (typeof deepIndicator != 'number') {
          length = args.length;
        }
        if (length > 3 && typeof args[length - 2] == 'function') {
          callback = createCallback(args[--length - 1], args[length--], 2);
        } else if (length > 2 && typeof args[length - 1] == 'function') {
          callback = args[--length];
        }
      }
      while (++index < length) {
        (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
          var found,
              isArr,
              result = source,
              value = object[key];
          if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
            var stackLength = stackA.length;
            while (stackLength--) {
              if ((found = stackA[stackLength] == source)) {
                value = stackB[stackLength];
                break;
              }
            }
            if (!found) {
              value = isArr ? (isArray(value) ? value : []) : (isPlainObject(value) ? value : {});
              if (callback) {
                result = callback(value, source);
                if (typeof result != 'undefined') {
                  value = result;
                }
              }
              stackA.push(source);
              stackB.push(value);
              if (!callback) {
                value = merge(value, source, indicatorObject, callback, stackA, stackB);
              }
            }
          } else {
            if (callback) {
              result = callback(value, source);
              if (typeof result == 'undefined') {
                result = source;
              }
            }
            if (typeof result != 'undefined') {
              value = result;
            }
          }
          object[key] = value;
        });
      }
      return object;
    }
    function omit(object, callback, thisArg) {
      var isFunc = typeof callback == 'function',
          result = {};
      if (isFunc) {
        callback = createCallback(callback, thisArg);
      } else {
        var props = concat.apply(arrayRef, arguments);
      }
      forIn(object, function(value, key, object) {
        if (isFunc ? !callback(value, key, object) : indexOf(props, key, 1) < 0) {
          result[key] = value;
        }
      });
      return result;
    }
    function pairs(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }
    function pick(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var index = 0,
            props = concat.apply(arrayRef, arguments),
            length = isObject(object) ? props.length : 0;
        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
      } else {
        callback = createCallback(callback, thisArg);
        forIn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }
    function values(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }
    function at(collection) {
      var index = -1,
          props = concat.apply(arrayRef, slice(arguments, 1)),
          length = props.length,
          result = Array(length);
      if (noCharByIndex && isString(collection)) {
        collection = collection.split('');
      }
      while (++index < length) {
        result[index] = collection[props[index]];
      }
      return result;
    }
    function contains(collection, target, fromIndex) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = false;
      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
      if (typeof length == 'number') {
        result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
      } else {
        each(collection, function(value) {
          if (++index >= fromIndex) {
            return !(result = value === target);
          }
        });
      }
      return result;
    }
    function countBy(collection, callback, thisArg) {
      var result = {};
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
      });
      return result;
    }
    function every(collection, callback, thisArg) {
      var result = true;
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          return (result = !!callback(value, index, collection));
        });
      }
      return result;
    }
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }
    function find(collection, callback, thisArg) {
      var result;
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return false;
        }
      });
      return result;
    }
    function forEach(collection, callback, thisArg) {
      if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          if (callback(collection[index], index, collection) === false) {
            break;
          }
        }
      } else {
        each(collection, callback, thisArg);
      }
      return collection;
    }
    function groupBy(collection, callback, thisArg) {
      var result = {};
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
      });
      return result;
    }
    function invoke(collection, methodName) {
      var args = slice(arguments, 2),
          index = -1,
          isFunc = typeof methodName == 'function',
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }
    function map(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        each(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }
    function max(collection, callback, thisArg) {
      var computed = -Infinity,
          result = computed;
      if (!callback && isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg);
        each(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    function min(collection, callback, thisArg) {
      var computed = Infinity,
          result = computed;
      if (!callback && isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg);
        each(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    var pluck = map;
    function reduce(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = createCallback(callback, thisArg, 4);
      if (isArray(collection)) {
        var index = -1,
            length = collection.length;
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        each(collection, function(value, index, collection) {
          accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection);
        });
      }
      return accumulator;
    }
    function reduceRight(collection, callback, accumulator, thisArg) {
      var iterable = collection,
          length = collection ? collection.length : 0,
          noaccum = arguments.length < 3;
      if (typeof length != 'number') {
        var props = keys(collection);
        length = props.length;
      } else if (noCharByIndex && isString(collection)) {
        iterable = collection.split('');
      }
      callback = createCallback(callback, thisArg, 4);
      forEach(collection, function(value, index, collection) {
        index = props ? props[--length] : --length;
        accumulator = noaccum ? (noaccum = false, iterable[index]) : callback(accumulator, iterable[index], index, collection);
      });
      return accumulator;
    }
    function reject(collection, callback, thisArg) {
      callback = createCallback(callback, thisArg);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }
    function shuffle(collection) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        var rand = floor(nativeRandom() * (++index + 1));
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }
    function some(collection, callback, thisArg) {
      var result;
      callback = createCallback(callback, thisArg);
      if (isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        each(collection, function(value, index, collection) {
          return !(result = callback(value, index, collection));
        });
      }
      return !!result;
    }
    function sortBy(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      callback = createCallback(callback, thisArg);
      forEach(collection, function(value, key, collection) {
        result[++index] = {
          'criteria': callback(value, key, collection),
          'index': index,
          'value': value
        };
      });
      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        result[length] = result[length].value;
      }
      return result;
    }
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return noCharByIndex && isString(collection) ? collection.split('') : slice(collection);
      }
      return values(collection);
    }
    var where = filter;
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }
    function difference(array) {
      var index = -1,
          length = array ? array.length : 0,
          flattened = concat.apply(arrayRef, arguments),
          contains = cachedContains(flattened, length),
          result = [];
      while (++index < length) {
        var value = array[index];
        if (!contains(value)) {
          result.push(value);
        }
      }
      return result;
    }
    function first(array, callback, thisArg) {
      if (array) {
        var n = 0,
            length = array.length;
        if (typeof callback != 'number' && callback != null) {
          var index = -1;
          callback = createCallback(callback, thisArg);
          while (++index < length && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = callback;
          if (n == null || thisArg) {
            return array[0];
          }
        }
        return slice(array, 0, nativeMin(nativeMax(0, n), length));
      }
    }
    function flatten(array, shallow) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (isArray(value)) {
          push.apply(result, shallow ? value : flatten(value));
        } else {
          result.push(value);
        }
      }
      return result;
    }
    function indexOf(array, value, fromIndex) {
      var index = -1,
          length = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
      } else if (fromIndex) {
        index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function initial(array, callback, thisArg) {
      if (!array) {
        return [];
      }
      var n = 0,
          length = array.length;
      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = createCallback(callback, thisArg);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }
    function intersection(array) {
      var args = arguments,
          argsLength = args.length,
          cache = {'0': {}},
          index = -1,
          length = array ? array.length : 0,
          isLarge = length >= 100,
          result = [],
          seen = result;
      outer: while (++index < length) {
        var value = array[index];
        if (isLarge) {
          var key = value + '';
          var inited = hasOwnProperty.call(cache[0], key) ? !(seen = cache[0][key]) : (seen = cache[0][key] = []);
        }
        if (inited || indexOf(seen, value) < 0) {
          if (isLarge) {
            seen.push(value);
          }
          var argsIndex = argsLength;
          while (--argsIndex) {
            if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      return result;
    }
    function last(array, callback, thisArg) {
      if (array) {
        var n = 0,
            length = array.length;
        if (typeof callback != 'number' && callback != null) {
          var index = length;
          callback = createCallback(callback, thisArg);
          while (index-- && callback(array[index], index, array)) {
            n++;
          }
        } else {
          n = callback;
          if (n == null || thisArg) {
            return array[length - 1];
          }
        }
        return slice(array, nativeMax(0, length - n));
      }
    }
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function object(keys, values) {
      var index = -1,
          length = keys ? keys.length : 0,
          result = {};
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else {
          result[key[0]] = key[1];
        }
      }
      return result;
    }
    function range(start, end, step) {
      start = +start || 0;
      step = +step || 1;
      if (end == null) {
        end = start;
        start = 0;
      }
      var index = -1,
          length = nativeMax(0, ceil((end - start) / step)),
          result = Array(length);
      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0,
            index = -1,
            length = array ? array.length : 0;
        callback = createCallback(callback, thisArg);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0,
          high = array ? array.length : low;
      callback = callback ? createCallback(callback, thisArg, 1) : identity;
      value = callback(value);
      while (low < high) {
        var mid = (low + high) >>> 1;
        callback(array[mid]) < value ? low = mid + 1 : high = mid;
      }
      return low;
    }
    function union() {
      return uniq(concat.apply(arrayRef, arguments));
    }
    function uniq(array, isSorted, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0,
          result = [],
          seen = result;
      if (typeof isSorted == 'function') {
        thisArg = callback;
        callback = isSorted;
        isSorted = false;
      }
      var isLarge = !isSorted && length >= 75;
      if (isLarge) {
        var cache = {};
      }
      if (callback) {
        seen = [];
        callback = createCallback(callback, thisArg);
      }
      while (++index < length) {
        var value = array[index],
            computed = callback ? callback(value, index, array) : value;
        if (isLarge) {
          var key = computed + '';
          var inited = hasOwnProperty.call(cache, key) ? !(seen = cache[key]) : (seen = cache[key] = []);
        }
        if (isSorted ? !index || seen[seen.length - 1] !== computed : inited || indexOf(seen, computed) < 0) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }
    function without(array) {
      var index = -1,
          length = array ? array.length : 0,
          contains = cachedContains(arguments, 1),
          result = [];
      while (++index < length) {
        var value = array[index];
        if (!contains(value)) {
          result.push(value);
        }
      }
      return result;
    }
    function zip(array) {
      var index = -1,
          length = array ? max(pluck(arguments, 'length')) : 0,
          result = Array(length);
      while (++index < length) {
        result[index] = pluck(arguments, index);
      }
      return result;
    }
    function after(n, func) {
      if (n < 1) {
        return func();
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }
    function bind(func, thisArg) {
      return isBindFast || (nativeBind && arguments.length > 2) ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, slice(arguments, 2));
    }
    function bindAll(object) {
      var funcs = concat.apply(arrayRef, arguments),
          index = funcs.length > 1 ? 0 : (funcs = functions(object), -1),
          length = funcs.length;
      while (++index < length) {
        var key = funcs[index];
        object[key] = bind(object[key], object);
      }
      return object;
    }
    function bindKey(object, key) {
      return createBound(object, key, slice(arguments, 2));
    }
    function compose() {
      var funcs = arguments;
      return function() {
        var args = arguments,
            length = funcs.length;
        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }
    function debounce(func, wait, immediate) {
      var args,
          result,
          thisArg,
          timeoutId;
      function delayed() {
        timeoutId = null;
        if (!immediate) {
          result = func.apply(thisArg, args);
        }
      }
      return function() {
        var isImmediate = immediate && !timeoutId;
        args = arguments;
        thisArg = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(delayed, wait);
        if (isImmediate) {
          result = func.apply(thisArg, args);
        }
        return result;
      };
    }
    function delay(func, wait) {
      var args = slice(arguments, 2);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, wait);
    }
    function defer(func) {
      var args = slice(arguments, 1);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, 1);
    }
    if (isV8 && freeModule && typeof setImmediate == 'function') {
      defer = bind(setImmediate, window);
    }
    function memoize(func, resolver) {
      var cache = {};
      return function() {
        var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + '';
        return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments));
      };
    }
    function once(func) {
      var ran,
          result;
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);
        func = null;
        return result;
      };
    }
    function partial(func) {
      return createBound(func, slice(arguments, 1));
    }
    function partialRight(func) {
      return createBound(func, slice(arguments, 1), null, indicatorObject);
    }
    function throttle(func, wait) {
      var args,
          result,
          thisArg,
          timeoutId,
          lastCalled = 0;
      function trailingCall() {
        lastCalled = new Date;
        timeoutId = null;
        result = func.apply(thisArg, args);
      }
      return function() {
        var now = new Date,
            remaining = wait - (now - lastCalled);
        args = arguments;
        thisArg = this;
        if (remaining <= 0) {
          clearTimeout(timeoutId);
          timeoutId = null;
          lastCalled = now;
          result = func.apply(thisArg, args);
        } else if (!timeoutId) {
          timeoutId = setTimeout(trailingCall, remaining);
        }
        return result;
      };
    }
    function wrap(value, wrapper) {
      return function() {
        var args = [value];
        push.apply(args, arguments);
        return wrapper.apply(this, args);
      };
    }
    function escape(string) {
      return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
    }
    function identity(value) {
      return value;
    }
    function mixin(object) {
      forEach(functions(object), function(methodName) {
        var func = lodash[methodName] = object[methodName];
        lodash.prototype[methodName] = function() {
          var args = [this.__wrapped__];
          push.apply(args, arguments);
          return new lodash(func.apply(lodash, args));
        };
      });
    }
    function noConflict() {
      window._ = oldDash;
      return this;
    }
    function random(min, max) {
      if (min == null && max == null) {
        max = 1;
      }
      min = +min || 0;
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + floor(nativeRandom() * ((+max || 0) - min + 1));
    }
    function result(object, property) {
      var value = object ? object[property] : undefined;
      return isFunction(value) ? object[property]() : value;
    }
    function template(text, data, options) {
      var settings = lodash.templateSettings;
      text || (text = '');
      options = defaults({}, options, settings);
      var imports = defaults({}, options.imports, settings.imports),
          importsKeys = keys(imports),
          importsValues = values(imports);
      var isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";
      var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
        if (escapeValue) {
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;
        return match;
      });
      source += "';\n";
      var variable = options.variable,
          hasVariable = variable;
      if (!hasVariable) {
        variable = 'obj';
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
      source = 'function(' + variable + ') {\n' + (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') + "var __t, __p = '', __e = _.escape" + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
      var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';
      try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
      } catch (e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      result.source = source;
      return result;
    }
    function times(n, callback, thisArg) {
      n = +n || 0;
      var index = -1,
          result = Array(n);
      while (++index < n) {
        result[index] = callback.call(thisArg, index);
      }
      return result;
    }
    function unescape(string) {
      return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
    }
    function uniqueId(prefix) {
      var id = ++idCounter;
      return (prefix == null ? '' : prefix + '') + id;
    }
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }
    function wrapperToString() {
      return this.__wrapped__ + '';
    }
    function wrapperValueOf() {
      return this.__wrapped__;
    }
    lodash.after = after;
    lodash.assign = assign;
    lodash.at = at;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.countBy = countBy;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.forIn = forIn;
    lodash.forOwn = forOwn;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.min = min;
    lodash.object = object;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.range = range;
    lodash.reject = reject;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.zip = zip;
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    mixin(lodash);
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;
    forOwn(lodash, function(func, methodName) {
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName] = function() {
          var args = [this.__wrapped__];
          push.apply(args, arguments);
          return func.apply(lodash, args);
        };
      }
    });
    lodash.first = first;
    lodash.last = last;
    lodash.take = first;
    lodash.head = first;
    forOwn(lodash, function(func, methodName) {
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName] = function(callback, thisArg) {
          var result = func(this.__wrapped__, callback, thisArg);
          return callback == null || (thisArg && typeof callback != 'function') ? result : new lodash(result);
        };
      }
    });
    lodash.VERSION = '1.0.1';
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.value = wrapperValueOf;
    lodash.prototype.valueOf = wrapperValueOf;
    each(['join', 'pop', 'shift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return func.apply(this.__wrapped__, arguments);
      };
    });
    each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });
    each(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodash(func.apply(this.__wrapped__, arguments));
      };
    });
    if (hasObjectSpliceBug) {
      each(['pop', 'shift', 'splice'], function(methodName) {
        var func = arrayRef[methodName],
            isSplice = methodName == 'splice';
        lodash.prototype[methodName] = function() {
          var value = this.__wrapped__,
              result = func.apply(value, arguments);
          if (value.length === 0) {
            delete value[0];
          }
          return isSplice ? new lodash(result) : result;
        };
      });
    }
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      window._ = lodash;
      define(function() {
        return lodash;
      });
    } else if (freeExports) {
      if (freeModule) {
        (freeModule.exports = lodash)._ = lodash;
      } else {
        freeExports._ = lodash;
      }
    } else {
      window._ = lodash;
    }
  }(this));
})(require("process"));
