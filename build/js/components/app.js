import React from 'react';
import Router from 'react-router';
var { RouteHandler } = Router;

var App = React.createClass({displayName: "App",
    render: function() {

    var links = [];
      return(React.createElement("div", null, 

         React.createElement("div", {className: "navbar navbar-default navbar-fixed-top", role: "navigation"}, 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement("a", {className: "navbar-brand"}, "App Logs")
            ), 
            React.createElement("div", {className: "navbar-collapse collapse"}, 
              React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                { links}
              )
              )
            )
        ), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row", id: "mainApp"}, 
            React.createElement("div", {className: "main"}, 
              React.createElement("div", {className: "pane "}, 
                React.createElement(RouteHandler, null)
              )
            )
          )
       )

      ));
    }
});

export default App;
