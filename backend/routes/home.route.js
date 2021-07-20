const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/home.controller");

router.get("/home", home_controller);

module.exports = router;
