import React from 'react';
import Router from 'react-router';
import LogActions from './actions/log-actions'
import LogStore from './stores/log-store'
import momemnt from 'moment';
import reqwest from 'reqwest';

var { Link } = Router;


function getLogs (){
  return {
    logs: LogStore.all()
  }
}

function getDataXHR(){
  reqwest({
    url: 'http://applog.apps.axonerp.com/geotech/logs?auth=uJFb6j0flWctLkBZhgjPPIj2GeqzUpA',
    type:'json',
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    success: function (resp){
      console.log(resp)
    },
    error: function (err){
      console.log(err)
    }
  })
}

var Logs = React.createClass({
    mixins:[LogStore.mixin, Router.State],
    getInitialState(){
      return getLogs();
    },
    componentDidMount(){
      LogActions.getList();
      getDataXHR();
    },
    storeDidChange(){
      this.setState(getLogs());
    },
    render: function() {
        var regex = /(\w*)\.(\w*)\.(\w*)Exception:/
        var logs = this.state.logs.map((log, idx) => {
            return (
              <tr>
                <td>
                  <div className="error_count"> { log.count } </div>
                </td>
                <td> 
                  <div>
                    { log.message.substring(0, 200) } <span className="ellipsis"> ... </span>
                  </div>
                </td>
                <td className="ax-grid-action-4"> { moment(log.lastOccurred).fromNow() } </td>
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
