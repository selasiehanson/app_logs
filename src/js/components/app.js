import React from 'react';
import Router from 'react-router';
var { RouteHandler } = Router;

var App = React.createClass({
    render: function() {

    var links = [];
      return(<div>

         <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">App Logs</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {{ links }}
              </ul>
              </div>
            </div>
        </div>
        <div className="container">
          <div className="row" id="mainApp">
            <div className="main" >
              <div className="pane ">
                <RouteHandler />
              </div>
            </div>
          </div>
       </div>

      </div>);
    }
});

export default App;
