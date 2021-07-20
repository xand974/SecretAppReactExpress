const NoteModel = require("../models/Note");

module.exports = {
  all_notes_get: async (req, res) => {
    try {
      const listFound = await NoteModel.find();
      if (!listFound) return res.json(["no list found"]);
      return res.status(200).json(listFound);
    } catch (err) {
      return res.json(err);
    }
  },
};
