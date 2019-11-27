var isEmpty = require('../../utils/isEmpty');
var sendToViewers = require('../../utils/sendToViewers');

module.exports = function(args, finished) {

  var body = args.req.body;
  if (!body || isEmpty(body)) {
    return finished({error: 'No content'});
  }

  var documentName = args.documentName;
  var global = 'jsdbList';
  var doc = this.documentStore.use(global, documentName);
  doc.enable_list();

  console.log(args);

  var index = doc.list.insert_before(+args.position, args.req.body);

  sendToViewers.call(this, global, [documentName]);

  finished({index: index});

};
