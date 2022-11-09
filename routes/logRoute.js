const router = require('express').Router();
const bcrypt = require('bcrypt');
const loga = require('../view/Loga.jsx');
const { Admin } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(loga);
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    res.json({ status: 'error', message: 'заполните все поля' });
    return;
  }
  const admin = await Admin.findOne({ where: { login }, raw: true });
  if (!admin) {
    res.json({ status: 'error', message: 'такого пользователя не существует' });
    return;
  }
  const isSame = await bcrypt.compare(password, admin.password);
  if (!isSame) {
    res.json({ status: 'error', message: 'не правильный логин или пароль' });
    return;
  }
  req.session.userId = admin.id;
  res.json({ status: 'success', url: '/' });
});
module.exports = router;
