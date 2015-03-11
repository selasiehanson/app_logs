import data from './data';
import McFly from 'mcfly';
import _ from 'underscore';

window.x = data;

var parsedData  = _.groupBy(x, function (log){
  return log.log_data.message
});

var out  = [];
for(var i in parsedData){
  out.push({message: i, count: parsedData[i].length }); 
}

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
  _storeData = data || [];
};
  
let loadLogs = () => {
  _setData(out)
  LogStore.emitChange();
}
  

export default LogStore;
