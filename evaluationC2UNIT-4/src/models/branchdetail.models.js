const mongoose = require("mongoose");

// BranchDetail SCHEMA
// step 1 :- creating the schema

const branchSchema = new mongoose.Schema(
{
    name: {type: String, required: true},
    address: {type: String, required: true},
    IFSC: {type: String, required: true},
    MICR: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Branch = mongoose.model("branch",branchSchema);

module.exports = Branch;