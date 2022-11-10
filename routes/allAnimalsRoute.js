const router = require('express').Router();

const AllAnimalsPage = require('../view/AllAnimalsPage.jsx');
const { Animal } = require('../db/models');
const AnimalPage = require('../view/AnimalPage.jsx');
const { Photo } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const animals = await Animal.findAll({ order: [['id', 'DESC']], raw: true });
  res.renderComponent(AllAnimalsPage, { animals, title: 'Zoo', user });
});

router.delete('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  await Animal.destroy({ where: { id: animalId } });
  res.status(204).end();
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const galery = await Photo.findAll({ where: { animalId: id }, raw: true });
  // console.log(galery);
  res.renderComponent(AnimalPage, { galery, title: 'Zoo' });
});

router.put('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  const { name, describe } = req.body;
  await Animal.update({ name, describe }, { where: { id: animalId } });
  const updatedAnimalCard = await Animal.findOne({ where: { id: animalId } });
  res.json({ name: updatedAnimalCard.name, describe: updatedAnimalCard.describe });
});

router.post('/', async (req, res) => {
  const { name, describe } = req.body;
  const newAnimal = await Animal.create({ name, describe });
  res.json(newAnimal);
});

module.exports = router;
