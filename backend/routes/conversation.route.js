const router = require("express").Router();
const conversation_controller = require("../controllers/conversation.controller");

router.post("/", conversation_controller.create_conv_post);
router.get("/:userId", conversation_controller.get_conversation);
router.delete(
  "/delete/:receiverId",
  conversation_controller.delete_conversation
);
router.get(
  "/find/:firstUserId/:secondUserId",
  conversation_controller.get_conversations_with_two_userId
);
module.exports = router;
