const express = require("express");

const {body , validations} = require("express-validator")

const User = require("../models/book.models");

const router = express.Router();

router.post("", async (req,res) => {
    try{
        const book = await book.create(req.body)

        return res.status(400).send(comment)
    }catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports = router;