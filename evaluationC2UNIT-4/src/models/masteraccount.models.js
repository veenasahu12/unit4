const mongoose = require("mongoose");

// MasterAccount SCHEMA
// step 1 :- creating the schema

const masterSchema = new mongoose.Schema(
{
    balance: {type: String, required: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },
    savingAccount: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "saving",
        required: true,
    },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Master = mongoose.model("master",masterSchema);

module.exports = Master;