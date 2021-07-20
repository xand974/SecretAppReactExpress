const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/home.controller");

router.get("/home", home_controller.all_notes_get);
router.post("/create", home_controller.create_notes_post);

module.exports = router;
