const router = require('express').Router();
const MainPage = require('../view/Main.jsx');

router.get('/', (req, res) => {
  res.renderComponent(MainPage);
});

module.exports = router;
