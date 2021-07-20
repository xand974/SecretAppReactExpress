const authorize = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    //res.send("vous devez vous connecter");
    res.redirect("/login");
  }
};
const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    //res.send("vous êtes déjà connectés");
    res.redirect("/home");
  } else {
    next();
  }
};

module.exports = {
  authorize,
  redirectHome,
};
