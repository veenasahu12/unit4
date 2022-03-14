const express = require("express");

const Master = require("../models/masteraccount.models");

const crudcontroller = require("./crud.controllers");

const router = express.Router();

router.get("", async (req,res) => {
    try{
      const findmaster = await Master.find().populate({
          path: "userId",
          select: {firstName: 1,email: 1,_id:0}
      }).populate({path: "savingAccount" , select: ["account_number","balance"]}).lean().exec();
    }catch(err){
       return res.status(500).send({message: err.message});
    }
});

router.post("",crudcontroller.post(Master));

module.exports = router;