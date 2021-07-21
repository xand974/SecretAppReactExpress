const Note = require("../models/Note");
const User = require("../models/User");

module.exports = {
  all_notes_get: async (req, res) => {
    try {
      const listFound = await Note.find();
      if (!listFound) return res.json("no list found");
      if (listFound.length === 0)
        return res.status(200).json("vous pouvez créer de nouveaux post");

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
      if (!userFound)
        return res.status(401).json("connectez vous pour pouvoir vous poster");

      const { title, content } = req.body;
      var note = new Note({
        title,
        content,
        author: userFound.username,
      });

      await note.save();
      await User.findByIdAndUpdate({ _id: id }, { $push: { Posts: note } });
      return res.json(note);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
