const Conversation = require("../models/Conversation");
const User = require("../models/User");

module.exports = {
  //create conv
  create_conv_post: async (req, res) => {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      await newConversation.save();
      return res.status(200).send("conversation has been created succesfully");
    } catch (err) {
      return res.status(500).send("cannot create an instance : " + err);
    }
  },

  //get conv of a user

  //delete conv
};
