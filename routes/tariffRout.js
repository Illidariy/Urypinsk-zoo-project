const router = require('express').Router();
const Tariffs = require('../view/Tariffs');

router.get('/', (req, res) => {
  res.renderComponent(Tariffs);
});

module.exports = router;
