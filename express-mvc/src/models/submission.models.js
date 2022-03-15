const mongoose = require("mongoose");

// SUBMISSION SCHEMA
// Step 1 :- creating the schema
const submissionSchema = new mongoose.Schema(
  {
    marks: { type: Number, required: true },
    evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
      student_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const Submission = mongoose.model("submission", SubmissionSchema); 

module.exports = Submission;