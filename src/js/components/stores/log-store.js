import data from './data';
import McFly from 'mcfly';
import _ from 'underscore';

window.x = data;

var parsedData  = _.groupBy(x, function (log){
  return log.log_data.message
});
window.parsedData = parsedData;

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
window.out = out;
var Flux = new McFly();
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
  _setData(out)
  LogStore.emitChange();
}

export default LogStore;
