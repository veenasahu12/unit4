const express = require("express");

const router = express.Router();
const comment = require("../models/comment.models");


router.post("", async (req,res) => {
    try{
        const comment = await comment.create(req.body)

        return res.status(400).send(comment)
    }catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports = router;