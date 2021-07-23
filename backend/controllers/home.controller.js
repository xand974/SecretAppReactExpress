const Note = require("../models/Note");
const User = require("../models/User");

module.exports = {
  all_notes_get: async (req, res) => {
    try {
      const { userId } = req.session;
      const userFound = await User.findOne({ _id: userId });
      const listFound = await Note.find();
      if (!listFound) return res.json("no list found");
      if (listFound.length === 0)
        return res
          .status(200)
          .json(
            "vous êtes sur la page d'acceuil: vous pouvez créer de nouveaux post, bienvenue : " +
              userFound.username
          );

      return res.status(200).json(listFound);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  create_notes_get: async (req, res) => {
    res.send("créer un post ici");
  },
  create_notes_post: async (req, res) => {
    try {
      const id = req.session.userId;
      const userFound = await User.findOne({ _id: id });

      const { title, content } = req.body;
      var note = new Note({
        title,
        content,
        userId: userFound._id,
      });

      await note.save();
      await User.findByIdAndUpdate({ _id: id }, { $push: { Posts: note } });
      return res.json(note);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  update_note_patch: async (req, res) => {
    const noteFound = await Note.findById(req.params.id);
    !noteFound && res.status(404).send("aucune note trouvée");
    try {
      if (noteFound.userId == req.session.userId) {
        await noteFound.updateOne({ $set: req.body });

        return res.status(200).send("post updated");
      } else {
        return res.status(403).send("vous ne pouvez modifier que vos post");
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  delete_note_delete: async (req, res) => {
    const noteFound = await Note.findById(req.params.id);
    !noteFound && res.status(404).send("aucune note trouvée");
    try {
      if (noteFound.userId == req.session.userId) {
        await noteFound.deleteOne();

        return res.status(200).send("post deleted");
      } else {
        return res.status(403).send("vous ne pouvez supprimer que vos post");
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  like_note_patch: async (req, res) => {
    const noteFound = await Note.findById(req.params.id);
    !noteFound && res.status(404).send("aucune note trouvée");
    try {
      if (!noteFound.likes.includes(req.session.userId.toString())) {
        await noteFound.updateOne({ $push: { likes: req.session.userId } });
        return res.status(200).send("post liked");
      } else {
        console.log("no");
        await noteFound.updateOne({ $pull: { likes: req.session.userId } });
        return res.status(200).send("vous avez disliked le post");
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
