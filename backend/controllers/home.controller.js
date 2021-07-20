const Note = require("../models/Note");

module.exports = {
  all_notes_get: async (req, res) => {
    try {
      const listFound = await Note.find();
      if (!listFound) return res.json(["no list found"]);
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
      const { title, content } = req.body;
      var note = new Note({
        title,
        content,
      });

      await note.save();
      return res.json(note);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
