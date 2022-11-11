const router = require('express').Router();
const path = require('path');
const util = require('util');

const AllAnimalsPage = require('../view/AllAnimalsPage.jsx');
const { Animal } = require('../db/models');
const AnimalPage = require('../view/AnimalPage.jsx');
const { Photo } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const animals = await Animal.findAll({ order: [['id', 'DESC']], raw: true });
  res.sendFile(__dirname, '../view/AllAnimalPage');
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
  res.renderComponent(AnimalPage, { galery, title: 'Zoo' });
});

router.put('/:animalId', async (req, res) => {
  const { animalId } = req.params;
  const { name, describe } = req.body;
  await Animal.update({ name, describe }, { where: { id: animalId } });
  const updatedAnimalCard = await Animal.findOne({ where: { id: animalId } });
  res.json({ name: updatedAnimalCard.name, describe: updatedAnimalCard.describe });
});

router.post('/test', async (req, res) => {
  const fileName = req.files.homesImg.name;
  const fileSize = req.files.homesImg.length;
  const extension = path.extname(fileName);
  const allowedExtensions = /.png|.jpeg|.jpg|.gif|.webp/;
  if (!allowedExtensions.test(extension)) {
    return ('Unsupported extension !');
  }
  if (fileSize > 5000000) {
    return ('File must be less than 5MB');
  }
  const { md5 } = req.files.homesImg;

  const URL = `/upload/${md5}${extension}`;

  req.files.homesImg.mv(`./public/${URL}`, (err) => {
    if (err) { return res.status(500).send(err); }
    return res.json({ path: URL });
  });
});

router.post('/', async (req, res) => {
  const { name, describe, pic } = req.body;
  console.log(name, describe, pic);

  const newAnimal = await Animal.create({ name, describe, uri: pic });
  res.json(newAnimal);
});

module.exports = router;
