import mongoose from "mongoose";

// Define the schema for SpecialCamps
const specialCampsSchema = new mongoose.Schema(
  {
    title: {
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
  },
  {
    timestamps: true,
  }
);

// Create a model from the schema
const SpecialCamps = mongoose.model("SpecialCamps", specialCampsSchema);

export default SpecialCamps;
