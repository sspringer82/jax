const model = require('./model');
const view = require('./view');

function listAction(req, res) {
  const data = model.getAll();
  res.send(view.render(data));
}

function deleteAction(req, res) {
  console.log(req.params.id);
  // delete stuff
  res.redirect('/todo');
}

module.exports = {
  listAction,
  deleteAction,
};
