const router = require('express').Router();
const Tariffs = require('../view/Tariffs.jsx');
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
  console.log(myTar);

  res.renderComponent(Tariffs);
});

module.exports = router;
