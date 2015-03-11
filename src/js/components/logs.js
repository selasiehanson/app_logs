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

var Logs = React.createClass({
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

              <tr>
                <td>
                  <div className="error_count"> { log.count } </div>
                </td>
                <td> 
                  <div>
                      { log.message.substring(0, 200) }... 
                  </div>
                </td>
              </tr> 
            )
        })
        return (
            <div className="home">
                <table className="table table-bordered log-table">
                  <tbody>
                     {{ logs }}
                   </tbody>
                </table>
                
            </div>
        );
    }
});

export default Logs;
