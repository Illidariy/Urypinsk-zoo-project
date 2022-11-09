function checkSession(req, res, next) {
  if (req.session?.user_id) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = checkSession;