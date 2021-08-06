const Message = require("../models/Message");
const Conversation = require("../models/Conversation");

module.exports = {
  add_message_post: async (req, res) => {
    const message = new Message(req.body);
    try {
      const newMessage = await message.save();
      return res.status(200).json(newMessage);
    } catch (err) {
      return res.status(200).json(err);
    }
  },
  get_message: async (req, res) => {
    try {
      const messages = await Message.find({
        conversationId: req.params.conversationId,
      });
      return res.status(200).json(messages);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
