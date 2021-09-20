const {
    verifySignUp
} = require("../middlewares");
const {authController} = require("../controllers");
const Router = require('express').Router;
const router = new Router();

router.post(
    "/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ],
    authController.signup
);

router.post("/signin", authController.signin);
router.get("/:id", authController.getProfile);

module.exports = router;