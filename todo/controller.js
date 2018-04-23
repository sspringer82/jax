const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.send(view.render(req.baseUrl, data));
}

function deleteAction(req, res) {
  model.delete(req.params.id);
  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
};
