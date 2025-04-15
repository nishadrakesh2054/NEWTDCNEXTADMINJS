import mongoose from "mongoose";

// Define the schema for Application
const ApplicationSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
      required: [true, "Applicant name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: Number,
      required: false,
    },
    resumeUrl: {
      type: String,
      required: false,
    },
    coverLetter: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "interviewed", "accepted", "rejected"],
      default: "pending",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    careerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Career ID is required"],
      ref: "Career",
    },
  },
  {
    timestamps: true,
  }
);

// Create the model based on the schema
const Application = mongoose.model("Application", ApplicationSchema);

export default Application;
