import React from 'react';
import Router from 'react-router';

import App from './components/app';
import Logs from './components/logs';

var { Route } = Router;
var routes = (
    <Route handler={App}>
       <Route name="logs" path="/" handler={Logs} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});

var a = 12;
