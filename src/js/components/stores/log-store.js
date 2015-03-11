import McFly from 'mcfly';
import _ from 'underscore';
import reqwest from 'reqwest'
var URL =  '/api';

let transformData = (raw) => {

  var parsedData  = _.groupBy(raw, function (log){
    return log.log_data.message
  });

  var out  = [];
  for(var i in parsedData){
    var children = parsedData[i];
    children = _.sortBy(children, 'created_at').reverse();
    var lastOccurred;
    if(children.length > 0){
      lastOccurred = children[0].created_at;
    }else {
      lastOccurred = "";
    }
    var item = {
      message: i,
      count: parsedData[i].length,
      lastOccurred: lastOccurred,
      children:children
    };
    out.push(item); 
  };
  return out;
}

var Flux = new McFly();

//Our Store
var LogStore = Flux.createStore({
    all(){
      console.log('logs loaded'); 
      return _storeData;
    }
  },(payload)=> {
    switch(payload.actionType){
      case 'LOAD_LOGS':
        loadLogs();
      break;
    }
  });

var _storeData = [];
let _setData = (data) => {
  _storeData = data.reverse() || [];
};
  
let loadLogs = () => {
 reqwest({
    url: URL,
    type:'json',
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    success: function (resp){
      _setData(transformData(resp));
      console.log(resp);
      LogStore.emitChange();
    },
    error: function (err){
      console.log(err)
    }
  })

}

export default LogStore;
