import data from './data';
import McFly from 'mcfly';

window.x = data;
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
  _setData(data)
  LogStore.emitChange();
}
  

export default LogStore;
