const router = require('express').Router();
const MainPage = require('../view/Main.jsx');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(MainPage, { user });
});

module.exports = router;
