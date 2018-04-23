const model = require('./model');
const view = require('./view');

async function listAction(req, res) {
  try {
    const data = await model.getAll();
    res.render(__dirname + '/views/list.ejs', {
      data,
      baseUrl: req.baseUrl,
    });
  } catch (e) {
    console.error(e);
    res.send('Whoops');
  }
}

function deleteAction(req, res) {
  const id = parseInt(req.params.id, 10);
  model.delete(id);
  res.redirect(req.baseUrl);
}

function newAction(req, res) {
  res.render(__dirname + '/views/form.ejs', { baseUrl: req.baseUrl });
}
function saveAction(req, res) {
  const data = req.body;

  model.save(data);

  res.redirect(req.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
  newAction,
  saveAction,
};
