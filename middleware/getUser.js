const { Admin } = require('../db/models');

async function getUser(req, res, next) {
  if (req.session?.user_id) {
    const user = await Admin.findByPk((req.session.user_id));
    res.locals.user = user;
  }
  next();
}

module.exports = getUser;
