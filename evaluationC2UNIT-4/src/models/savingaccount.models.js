const mongoose = require("mongoose");

// SavingAccount SCHEMA
// step 1 :- creating the schema

const savingSchema = new mongoose.Schema(
{
    account_number: {type: String, required: true},
    balance: {type: String, required: true},
    interestRate: {type: String, required: true},
    masterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "master",
        required: true,
    }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Saving = mongoose.model("saving",savingSchema);

module.exports = Saving;