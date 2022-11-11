const router = require('express').Router();
const Tariffs = require('../view/Tariffs');
const db = require('../db/models');

router.get('/', async (req, res) => {
  const myTar = await db.Tariff.findAll({
    include: [{
      association: db.Tariff.Day,
      attributes: ['type'],
    },
    {
      association: db.Tariff.Age,
      attributes: ['category'],
    }],
    attributes: ['id', 'price'],
    raw: true,
  });


  res.renderComponent(Tariffs, { myTar });
});

router.put('/:id', async (req, res) => {
  const { newPrice } = req.body;
  const myTar = await db.Tariff.findOne({ where: { id: req.params.id } });
  console.log(myTar);
  myTar.price = newPrice;
  await myTar.save();
  res.json({ price: newPrice });
});

module.exports = router;
