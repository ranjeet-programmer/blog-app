const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { checkIfUserExists } = require("../../middlewares/user-middlware");

router.post("/signup", checkIfUserExists, UserController.create);
router.post("/signin", UserController.signIn);

module.exports = router;
