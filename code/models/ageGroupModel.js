import mongoose from "mongoose";

const ageGroupSchema = new mongoose.Schema(
  {
    ageGroup: {
      type: String,
      required: true,
    },
    title: {
        type: String,
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
    programId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Program",
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const AgeGroup = mongoose.model("AgeGroup", ageGroupSchema);

export default AgeGroup;
