const router = require("express").Router();
const user_controller = require("../controllers/user.controller");
const cookie = require("../middlewares/cookie");

router.post("/register", cookie.redirectHome, user_controller.register_post);
router.get("/register", cookie.redirectHome, user_controller.register_get);

router.get("/login", cookie.redirectHome, user_controller.login_get);
router.post("/login", cookie.redirectHome, user_controller.login_post);

module.exports = router;
