const mongoose = require("mongoose");

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Conversation", conversationSchema);
