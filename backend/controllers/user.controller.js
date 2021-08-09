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
        isAdmin: false,
      });

      await user.save();
      return res.status(200).json("votre compte vient d'être crée");
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  login_post: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFound = await User.findOne({ username });

      if (!userFound)
        return res.status(401).send("vous n'avez pas encore de compte");

      const isMatched = await bcrypt.compare(password, userFound.password);
      if (isMatched) {
        req.session.userId = userFound._id;
        // req.user.isAdmin = false;
        return res.status(200).send(userFound);
      } else {
        return res.status(401).send("mot de passe ou identifiant incorrecte");
      }
    } catch (err) {
      return res.status(500).json("erreur  :" + err);
    }
  },
  logout_post: (req, res) => {
    req.session.destroy();
    return res.json("vous êtes déconnecté");
  },
  follow_post: async (req, res) => {
    const { userId } = req.body;
    try {
      const currentUser = await User.findById(userId);
      const userToFollow = await User.findById(req.params.id);

      if (userId === req.params.id) {
        return res.status(403).send("vous ne pouvez pas vous auto-suivre");
      }

      if (!currentUser.following.includes(userToFollow._id)) {
        const { password, updatedAt, _id, ...rest } = userToFollow._doc;

        await currentUser.updateOne({ $push: { following: _id } });
        await userToFollow.updateOne({ $push: { followers: currentUser._id } });
        return res.status(200).send("you follow now : " + rest);
      }
    } catch (err) {
      res.status(500).json("err : " + err);
    }
  },
  unfollow_post: async (req, res) => {
    const { userId } = req.body;
    var { id } = req.params;
    const userFound = await User.findOne({ _id: userId });
    const userToUnFollow = await User.findById({ _id: id });
    const { _id } = userToUnFollow._doc;
    if (userFound._id == id)
      return res.status(401).send("vous ne pouvez pas vous unfollow vous même");

    if (!userToUnFollow)
      return res.status(404).send("cette personne n'a pas été trouvé");

    try {
      await userFound.updateOne({ $pull: { following: _id } });
      await userToUnFollow.updateOne({ $pull: { followers: userFound._id } });

      return res.status(200).send("user enlevé");
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  user_get: async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const userFound = userId
        ? await User.findById(userId)
        : await User.findOne({ username });
      !userFound && res.status(404).send("aucun utilisateur trouvé");

      const { password, updatedAt, ...other } = userFound._doc;
      return res.status(200).send(other);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  user_update: async (req, res) => {
    const { userId } = req.session;
    const { id } = req.params;
    var { password } = req.body;
    if (userId != id)
      return res.status(403).send("vous ne pouvez que modifier votre compte");
    if (password) {
      try {
        const newSalt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, newSalt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: req.body }
      );
      return res.status(200).json("successfully updated" + user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  user_delete: async (req, res) => {
    const { userId } = req.session;
    const { id } = req.params;
    if (userId != id)
      return res.status(403).send("vous ne pouvez que supprimer votre compte");

    try {
      const userDeleted = await User.findOneAndDelete({ _id: userId });
      req.session.destroy();
      return res.status(200).send("utilisateur a été supprimé");
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  friend_user_get: async (req, res) => {
    try {
      const friendsUser = await User.findById(req.params.id);
      return res.status(200).send(friendsUser.following);
    } catch (err) {
      return res.status(500).json("something went wrong : " + err);
    }
  },
};
