const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller")

router.post("/signup", [
  body("email").isEmail().withMessage("Invalid email"),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("firstName is must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password is must be at least 6 characters long"),
], userController.signupUser);

module.exports = router;
