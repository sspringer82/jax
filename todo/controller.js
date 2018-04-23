const model = require('./model');

function listAction(req, res) {
  const data = model.getAll();
  res.send(data.join(', '));
}

module.exports = {
  listAction,
};
