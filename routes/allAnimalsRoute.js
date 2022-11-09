const router = require('express').Router();

const AllAnimalsPage = require('../view/AllAnimalsPage.jsx');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll({ row: true });
  res.renderComponent(AllAnimalsPage, { animals, title: 'Zoo' });
});

module.exports = router;
