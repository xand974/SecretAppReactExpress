const Conversation = require("../models/Conversation");

module.exports = {
  //create conv
  create_conv_post: async (req, res) => {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      const saveConv = await newConversation.save();
      return res.status(200).json(saveConv);
    } catch (err) {
      return res.status(500).json("cannot create an instance : " + err);
    }
  },

  //get all convs of a user
  get_conversation: async (req, res) => {
    try {
      const allConvs = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      return res.status(200).json(allConvs);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //delete conv
  delete_conversation: async (req, res) => {
    try {
      await Conversation.deleteOne({
        members: { $all: [req.body.senderId, req.params.receiverId] },
      });

      return res.json("deleted succesfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //get conv with two userId
  get_conversations_with_two_userId: async (req, res) => {
    try {
      const conv = await Conversation.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });
      return res.status(200).json(conv);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
