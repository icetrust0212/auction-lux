const {
    authJwt
} = require("../middlewares");
const {userController} = require("../controllers");
const Router = require('express').Router;
const router = new Router();


router.get("/all", userController.allAccess);

router.get("/user", [authJwt.verifyToken], userController.userBoard);

router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    userController.moderatorBoard
);

router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    userController.adminBoard
);

module.exports = router;