const router = require("express").Router();
const message_controller = require("../controllers/message.controller");

router.post("/", message_controller.add_message_post);
router.get("/:conversationId", message_controller.get_message);

module.exports = router;
