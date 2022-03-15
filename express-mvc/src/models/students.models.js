const mongoose = require("mongoose");

// STUDENT SCHEMA
// Step 1 :- creating the schema
const studentSchema = new mongoose.Schema(
  {
    rollid: { type: String, required: true },
    currentbatch: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const Student = mongoose.model("student", studentSchema); 

module.exports = Student;