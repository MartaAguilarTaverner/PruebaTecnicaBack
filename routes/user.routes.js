const express = require("express");
const AuthController = require("../controller/auth.controllers");
const UserController = require("../controller/user.controller");

const router = express.Router();

router.get("/:id", AuthController.authenticateToken, UserController.getOneById);
router.get(
    "/:name",
    AuthController.authenticateToken,
    UserController.getOneByName
);
router.get(
    "/:email",
    AuthController.authenticateToken,
    UserController.getOneByEmail
);

module.exports = router;