var sendToViewers = require('../../../utils/sendToViewers');

module.exports = function(messageObj, session, send, finished) {

  var global = 'jsdbList';
  var subscripts = ['demo'];

  this.documentStore.use(global, subscripts).delete();

  sendToViewers.call(this, global, subscripts);
  
  finished({ok: true});

};