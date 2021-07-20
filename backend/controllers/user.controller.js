const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  register_post: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFound = await User.findOne({ username });
      if (userFound) return res.status(401).send("vous avez déjà un compte");

      const salt = await bcrypt.genSalt(10);
      const newPass = await bcrypt.hash(password, salt);
      var user = new User({
        username,
        password: newPass,
      });

      await user.save();
      return res.status(200).json("votre compte vient d'être crée");
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
