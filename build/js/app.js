import React from 'react';
import Router from 'react-router';

import App from './components/app';
import Logs from './components/logs';

var { Route } = Router;
var routes = (
    React.createElement(Route, {handler: App}, 
       React.createElement(Route, {name: "logs", path: "/", handler: Logs})
    )
);

Router.run(routes, function(Handler) {
    React.render(React.createElement(Handler, null), document.body);
});

var a = 12;
