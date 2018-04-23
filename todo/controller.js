const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.send(view.render(data));
}

function deleteAction(req, res) {
  model.delete(req.params.id);
  res.redirect('/todo');
}

module.exports = {
  listAction,
  deleteAction,
};
