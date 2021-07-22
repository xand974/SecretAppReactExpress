const router = require("express").Router();
const user_controller = require("../controllers/user.controller");
const cookie = require("../middlewares/cookie");

router.post("/register", cookie.redirectHome, user_controller.register_post);
router.get("/register", cookie.redirectHome, user_controller.register_get);

router.get("/login", cookie.redirectHome, user_controller.login_get);
router.post("/login", cookie.redirectHome, user_controller.login_post);

router.post("/logout", cookie.authorize, user_controller.logout_post);

router.post("/follow/:id", cookie.authorize, user_controller.follow_post);
router.get("/:id", cookie.authorize, user_controller.user_get);
router.patch("/:id", cookie.authorize, user_controller.user_update);
router.delete("/:id", cookie.authorize, user_controller.user_delete);
router.post("/unfollow/:id", cookie.authorize, user_controller.unfollow_post);

module.exports = router;
