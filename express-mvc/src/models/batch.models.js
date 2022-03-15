const mongoose = require("mongoose");

// BATCH SCHEMA
// Step 1 :- creating the schema
const batchSchema = new mongoose.Schema(
  {
    Batchname: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const Batch = mongoose.model("batch", batchSchema); 

module.exports = Batch;