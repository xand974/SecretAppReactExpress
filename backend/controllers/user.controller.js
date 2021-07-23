const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  register_get: (req, res) => {
    res.json("création de compte");
  },
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
  login_get: (req, res) => {
    res.json("connectez vous à votre compte sur cette page");
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
        return res
          .status(200)
          .send("vous êtes connectés : id:" + req.session.userId);
      } else {
        return res.status(401).send("mot de passe ou identifiant incorrecte");
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  logout_post: (req, res) => {
    req.session.destroy();
    return res.json("vous êtes déconnecté");
  },
  follow_post: async (req, res) => {
    try {
      const { userId } = req.session;
      var { id } = req.params;
      const userFound = await User.findOne({ _id: userId });
      const userToFollow = await User.findById({ _id: id });
      const { password, updatedAt, ...other } = userToFollow._doc;
      if (!userFound)
        return res
          .status(401)
          .send("vous devez vous connecter pour ajouter cette personne");

      if (userFound._id == id)
        return res.status(401).send("vous ne pouvez pas vous suivre vous même");

      if (!userToFollow)
        return res.status(404).send("cette personne n'a pas été trouvé");

      if (userFound.following.length === 0) {
        User.findByIdAndUpdate(
          { _id: userId },
          { $push: { following: other } }
        ).then(() => {
          return res
            .status(200)
            .send("personne ajouté car zero personne encore :" + userToFollow);
        });
      } else {
        userFound.following.forEach((user) => {
          if (user.username === userToFollow.username) {
            return res.status(401).send("vous suivez déjà cette personne");
          } else {
            User.findByIdAndUpdate(
              { _id: userId },
              { $push: { following: other } }
            ).then(() => {
              return res
                .status(200)
                .send(
                  "personne ajouté car " +
                    userFound.following.length +
                    "personnes dans le tableau:" +
                    userToFollow
                );
            });
          }
        });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  unfollow_post: async (req, res) => {
    const { userId } = req.session;
    var { id } = req.params;
    const userFound = await User.findOne({ _id: userId });
    const userToUnFollow = await User.findById({ _id: id });
    const { password, updatedAt, ...other } = userToUnFollow._doc;
    if (!userFound)
      return res
        .status(401)
        .send("vous devez vous connecter pour unfollow cette personne");

    if (userFound._id == id)
      return res.status(401).send("vous ne pouvez pas vous unfollow vous même");

    if (!userToUnFollow)
      return res.status(404).send("cette personne n'a pas été trouvé");

    try {
      const result = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { following: other } }
      );
      return res
        .status(200)
        .send(
          "utilisateur :" +
            userToUnFollow.username +
            " a été supprimé avec succès"
        );
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  user_get: async (req, res) => {
    const { id } = req.params;
    const userFound = await User.findOne({ _id: id });
    !userFound && res.status(404).send("aucun utilisateur trouvé");

    const { password, updatedAt, ...other } = userFound._doc;
    return res.status(200).send(other);
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
};
