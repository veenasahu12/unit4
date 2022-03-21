const express = require("express");

const {body , validations} = require("express-validator")

const User = require("../models/user.models");

const router = express.Router();

router.post(
   "/" ,
//    body for the first name
   body("firstName")
   .trim()
   .not()
   .isEmpty()
   .bail()
   .withMessage("Enter First Name")
   .isLength({min:3})
   .withMessage("First Name Must be at least 3 characters"),
)
// body for the last name
body("lastName").custom((value) => {
    if(value && value.length < 3){
        throw new Error("last name is invalid - enter at-least 3 characters")
    }
    return true;
})

//  body for age validation check(1-150)
body("age")
   .trim()
   .not()
   .isEmpty()
   .withMessage("Age cannot be empty")
   .isNumeric
   .withMessage("Age must be a number")
   .custom((val) => {
       if(val < 1 || val > 100){
           throw new Error("Incorrect age entered");
       }else{
           return true;
       }
   });


   async (req,res) => {
       try{
           console.log(body("firstname"));
           const errors = validationResult(req);
           console.log({errors});
           if(!errors.isEmpty()){
               return res.status(400).send({errors: errors.array()});
           }
           const userName = await User.create(req.body);

           return res.status(200).send(userName);
       }catch(err){
           return res.status(501).send({message: err.message});
       }
   };

   module.exports = router;