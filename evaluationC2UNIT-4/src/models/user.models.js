const mongoose = require("mongoose");

// USER SCHEMA
// step 1 :- creating the schema

const userSchema = new mongoose.Schema(
{
    firstName: {type: String, required: true},
    middleName: {type: String, required: false},
    lastName: {type: String, required: true},
    age : {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    gender: {type: String, required: true, default: 'female'},
    type: {type: String, required: true, unique: true, default: 'customer'},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step 2 : creating the model
const User = mongoose.model("user",userSchema);

module.exports = User;