const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.render(__dirname + '/views/list.ejs', { data, baseUrl: req.baseUrl });
}

function deleteAction(req, res) {
  const id = parseInt(req.params.id, 10);
  model.delete(id);
  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
};
