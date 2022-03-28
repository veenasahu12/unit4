const express = require ("express");
const router = express.Router();
const{body, validationResult} = require("express-validation");

const user = require("../models/user.models");

router.post(
    "",
    body("firstName")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please enter first name")
      .isLength({ min: 3, max: 30 })
      .withMessage("First name should be between 3 and 30 characters"),
  
    body("lastName")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please enter last name")
      .isLength({ min: 3, max: 30 })
      .withMessage("First name should be between 3 and 30 characters"),
  
    body("email ")
      .isEmail()
      .withMessage("Invalid email Id")
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email already exists");
        }
        return true;
      }),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Length should be of atleast 8 characters")
      .custom((value) => {
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
        if (!value.match(passw)) {
          throw new Error("Password must be strong");
        }
        return true;
      }),
  
  );
module.exports = router ;