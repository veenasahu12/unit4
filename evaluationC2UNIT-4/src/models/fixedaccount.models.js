const mongoose = require("mongoose");

// SavingAccount SCHEMA
// step 1 :- creating the schema

const fixedSchema = new mongoose.Schema(
{
    account_number: {type: String, unique:true, required: true},
    balance: {type: String, required: true},
    interestRate: {type: String, required: true},
    startDate : {type: String, required: true},
    maturityRate : {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Fixed = mongoose.model("fixed",fixedSchema);

module.exports = Fixed;