import mongoose from "mongoose";

// Define the Program Schema
const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageKey: {
      type: String,
    },
    bucket: {
      type: String,
    },
    mime: {
      type: String,
    },
    academyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Academy",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Program model
const Program = mongoose.model("Program", programSchema);

export default Program;
