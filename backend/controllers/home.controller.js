const Note = require("../models/Note");
const User = require("../models/User");

module.exports = {
  all_notes_get: async (req, res) => {
    try {
      const { userId } = req.session;
      const userFound = await User.findOne({ _id: userId });
      const listFound = await Note.find();
      if (!listFound) return res.json("no list found");

      return res.status(200).json(listFound);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  create_notes_post: async (req, res) => {
    try {
      var note = new Note(req.body);

      await note.save();
      return res.json(note);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  update_note_patch: async (req, res) => {
    try {
      const noteFound = await Note.findById(req.params.id);
      !noteFound && res.status(404).send("aucune note trouvée");
      if (noteFound.userId == req.body.userId) {
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
      if (noteFound.userId === req.body.userId) {
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
      const { userId } = req.body;
      if (!noteFound.likes.includes(userId)) {
        await noteFound.updateOne({ $push: { likes: userId } });
        return res.status(200).send("post liked");
      } else {
        await noteFound.updateOne({ $pull: { likes: userId } });
        return res.status(200).send("vous avez disliked le post");
      }
    } catch (err) {
      return res.status(500).json("une erreur : " + err);
    }
  },
  get_note_get: async (req, res) => {
    try {
      const noteFound = await Note.findById(req.params.id);
      !noteFound && res.status(404).send("aucune note trouvée");
      return res.status(200).send(noteFound);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  get_timelinenote_get: async (req, res) => {
    try {
      const userFound = await User.findById(req.params.id);
      const userNotes = await Note.find({ userId: userFound._id });
      const friendPost = await Promise.all(
        userFound.following.map((friend) => {
          return Note.find({ userId: friend._id });
        })
      );
      return res.status(200).send(userNotes.concat(...friendPost));
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  get_timeline_user: async (req, res) => {
    try {
      const userFound = await User.findOne({ username: req.params.username });
      if (!userFound) return res.status(404).send("Utilisateur non trouvé");

      const userPosts = await Note.find({ userId: userFound.id });

      return res.status(200).send(userPosts);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
