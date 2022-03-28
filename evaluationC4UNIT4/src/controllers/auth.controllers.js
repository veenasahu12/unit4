const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
require("dotenv").configs();

const jwt = require("jsonwebtoken");
const {findOne} = require("../models/user.models");


const authToken = (user) => {
    return jwt.sign({user}, `${process.env.TOKEN_SECRET}`)
};

const register = async (req , res) => {
    try{
        let user = await user.findOne({ email: req.body.email });

        if(user){
            return res.send(500).send({ message: "Already exists"});
        }
    }catch(err){
        return res.send(401).send({ message: error.message});
    }
};

const login = async (req , res) => {
    try{
        let user = await user.findOne({ email: req.body.email });

        if(user){
            return res.send(400).send({ message: "Already exists"});
        }
    }catch(err){
        return res.send(401).send({ message: error.message});
    }
};

module.exports = { register }