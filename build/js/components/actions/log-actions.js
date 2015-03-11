import McFly from 'mcfly'

var Flux = new McFly();

export default Flux.createActions({
  getList(){
    return {
      actionType: 'LOAD_LOGS'
    };
    console.log('m:loading logs')
  }
});
