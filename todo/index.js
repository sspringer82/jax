const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
  res.send('sleep, eat, code, repeat');
});

module.exports = router;
