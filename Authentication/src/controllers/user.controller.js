

const express = require("express");

const User = require("../models/user.model");

const crudcontroller = require("./crud.controllers");

const router = express.Router();

router.get("",async (req,res)=>{
    try{
        const user = await User.find().lean().exec();

        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send(err.message);
    }
})
router.post("", crudController.post(User));

module.exports = router;