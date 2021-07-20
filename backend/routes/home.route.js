const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/home.controller");
const cookie = require("../middlewares/cookie");

router.get("/home", cookie.authorize, home_controller.all_notes_get);
router.get("/create", cookie.authorize, home_controller.create_notes_get);
router.post("/create", cookie.authorize, home_controller.create_notes_post);

module.exports = router;
