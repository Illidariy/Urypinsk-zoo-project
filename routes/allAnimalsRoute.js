const router = require('express').Router();

const AllAnimalsPage = require('../view/AllAnimalsPage.jsx');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const animals = await Animal.findAll({ row: true });
  res.renderComponent(AllAnimalsPage, { animals, title: 'Zoo', user });
});

router.delete('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  await Animal.destroy({ where: { id: animalId } });
  res.status(204).end();
});

module.exports = router;
