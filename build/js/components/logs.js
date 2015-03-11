import React from 'react';
import Router from 'react-router';
import LogActions from './actions/log-actions'
import LogStore from './stores/log-store'

var { Link } = Router;

function getLogs (){
  return {
    logs: LogStore.all()
  }
}

var Logs = React.createClass({displayName: "Logs",
    mixins:[LogStore.mixin, Router.State],
    getInitialState(){
      return getLogs();
    },
    componentDidMount(){
      LogActions.getList();
    },
    storeDidChange(){
      this.setState(getLogs());
    },
    render: function() {
        var regex = /(\w*)\.(\w*)\.(\w*)Exception:/
        var logs = this.state.logs.map((log, idx) => {
          console.log(log);
            return (

              React.createElement("tr", null, 
                React.createElement("td", null, 
                  React.createElement("div", null, 
                    React.createElement("span", {className: "badge badge-space"}, " ", idx + 1, " "), 
                       log.log_data.message
                  )
                )
              ) 
            )
        })
        return (
            React.createElement("div", {className: "home"}, 
                React.createElement("table", {className: "table table-bordered"}, 
                  React.createElement("tbody", null, 
                     { logs}
                   )
                )
                
            )
        );
    }
});

export default Logs;
