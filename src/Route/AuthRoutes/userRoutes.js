const express = require("express");
const { check } = require("express-validator");
const authPage = require("../../controller/userController");

const router = express.Router();

router.post("/signup", authPage.signupUser);
router.post("/login", authPage.loginUser);

module.exports = router;
