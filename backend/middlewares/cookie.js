const authorize = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    //res.send("vous devez vous connecter");
    res.status(302).send("vous devez vous connecter");
  }
};
const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    console.log("vous êtes déjà connectés");
    res.status(302).send("vous êtes déjà connectés");
  } else {
    next();
  }
};

module.exports = {
  authorize,
  redirectHome,
};
