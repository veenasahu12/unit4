const express = require("express");

const Saving = require("../models/savingaccount.models");

const crudcontroller = require("./crud.controllers");

const router = express.Router();

router.get("", async (req,res) => {
    try{
      const findmaster = await Saving.find().populate({
          path: "masterId",
        //   select: {firstName: 1,email: 1,_id:0}

      }).lean().exec();

      return res.status(200).send({master: findmaster});
    }catch(err){
       return res.status(500).send({message: err.message});
    }
});

router.post("",crudcontroller.post(Saving));

module.exports = router;