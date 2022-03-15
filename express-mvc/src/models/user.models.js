const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const User = mongoose.model("user", userSchema); // user => users

module.exports = User;