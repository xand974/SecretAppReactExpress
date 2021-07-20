var noteFound = (req, res, next) => {
  if (res.status(404)) {
    return res.json("not found");
  }
  next();
};

module.exports = noteFound;
