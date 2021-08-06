const router = require("express").Router();
const conversation_controller = require("../controllers/conversation.controller");

router.post("/", conversation_controller.create_conv_post);

module.exports = router;
