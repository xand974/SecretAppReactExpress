const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  userId: String,
  content: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = new mongoose.model("Note", noteSchema);
