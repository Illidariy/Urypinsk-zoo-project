const router = require('express').Router();

const AllAnimalsPage = require('../view/AllAnimalsPage.jsx');
const { Animal } = require('../db/models');
const AnimalPage = require('../view/AnimalPage.jsx');
const { Photo } = require('../db/models');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll({ row: true });
  res.renderComponent(AllAnimalsPage, { animals, title: 'Zoo' });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const galery = await Photo.findAll({ where: { animalId: id }, row: true });
  // console.log(galery);
  res.renderComponent(AnimalPage, { galery, title: 'Zoo' });
});

module.exports = router;
