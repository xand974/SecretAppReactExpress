const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/home.controller");
const cookie = require("../middlewares/cookie");

router.get("/", home_controller.all_notes_get);
router.post("/create", cookie.authorize, home_controller.create_notes_post);

router.patch("/:id", home_controller.update_note_patch);
router.delete("/:id", cookie.authorize, home_controller.delete_note_delete);
router.patch("/like/:id", home_controller.like_note_patch);

router.get("/:id", cookie.authorize, home_controller.get_note_get);
router.get("/timenote/all/:id", home_controller.get_timelinenote_get);
router.get("/timenote/:username", home_controller.get_timeline_user);

module.exports = router;
