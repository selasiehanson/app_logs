/* */ 
"use strict";
var _prototypeProperties = function(child, staticProps, instanceProps) {
  if (staticProps)
    Object.defineProperties(child, staticProps);
  if (instanceProps)
    Object.defineProperties(child.prototype, instanceProps);
};
var _classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var assign = require("react/lib/Object.assign");
var invariant = require("react/lib/invariant");
var warning = require("react/lib/warning");
var PathUtils = require("./PathUtils");
var _currentRoute;
var Route = (function() {
  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);
    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }
  _prototypeProperties(Route, {
    createRoute: {
      value: function createRoute(options, callback) {
        options = options || {};
        if (typeof options === "string")
          options = {path: options};
        var parentRoute = _currentRoute;
        if (parentRoute) {
          warning(options.parentRoute == null || options.parentRoute === parentRoute, "You should not use parentRoute with createRoute inside another route's child callback; it is ignored");
        } else {
          parentRoute = options.parentRoute;
        }
        var name = options.name;
        var path = options.path || name;
        if (path && !(options.isDefault || options.isNotFound)) {
          if (PathUtils.isAbsolute(path)) {
            if (parentRoute) {
              invariant(parentRoute.paramNames.length === 0, "You cannot nest path \"%s\" inside \"%s\"; the parent requires URL parameters", path, parentRoute.path);
            }
          } else if (parentRoute) {
            path = PathUtils.join(parentRoute.path, path);
          } else {
            path = "/" + path;
          }
        } else {
          path = parentRoute ? parentRoute.path : "/";
        }
        if (options.isNotFound && !/\*$/.test(path))
          path += "*";
        var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);
        if (parentRoute) {
          if (route.isDefault) {
            invariant(parentRoute.defaultRoute == null, "%s may not have more than one default route", parentRoute);
            parentRoute.defaultRoute = route;
          } else if (route.isNotFound) {
            invariant(parentRoute.notFoundRoute == null, "%s may not have more than one not found route", parentRoute);
            parentRoute.notFoundRoute = route;
          }
          parentRoute.appendChild(route);
        }
        if (typeof callback === "function") {
          var currentRoute = _currentRoute;
          _currentRoute = route;
          callback.call(route, route);
          _currentRoute = currentRoute;
        }
        return route;
      },
      writable: true,
      configurable: true
    },
    createDefaultRoute: {
      value: function createDefaultRoute(options) {
        return Route.createRoute(assign({}, options, {isDefault: true}));
      },
      writable: true,
      configurable: true
    },
    createNotFoundRoute: {
      value: function createNotFoundRoute(options) {
        return Route.createRoute(assign({}, options, {isNotFound: true}));
      },
      writable: true,
      configurable: true
    },
    createRedirect: {
      value: function createRedirect(options) {
        return Route.createRoute(assign({}, options, {
          path: options.path || options.from || "*",
          onEnter: function onEnter(transition, params, query) {
            transition.redirect(options.to, options.params || params, options.query || query);
          }
        }));
      },
      writable: true,
      configurable: true
    }
  }, {
    appendChild: {
      value: function appendChild(route) {
        invariant(route instanceof Route, "route.appendChild must use a valid Route");
        if (!this.childRoutes)
          this.childRoutes = [];
        this.childRoutes.push(route);
      },
      writable: true,
      configurable: true
    },
    toString: {
      value: function toString() {
        var string = "<Route";
        if (this.name)
          string += " name=\"" + this.name + "\"";
        string += " path=\"" + this.path + "\">";
        return string;
      },
      writable: true,
      configurable: true
    }
  });
  return Route;
})();
module.exports = Route;
