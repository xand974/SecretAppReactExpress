const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/home.controller");
const cookie = require("../middlewares/cookie");

router.get("/", cookie.authorize, home_controller.all_notes_get);
router.get("/create", cookie.authorize, home_controller.create_notes_get);
router.post("/create", cookie.authorize, home_controller.create_notes_post);

router.patch("/:id", cookie.authorize, home_controller.update_note_patch);
router.delete("/:id", cookie.authorize, home_controller.delete_note_delete);
router.patch("/like/:id", cookie.authorize, home_controller.like_note_patch);

module.exports = router;
