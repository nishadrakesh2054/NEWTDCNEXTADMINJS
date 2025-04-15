import mongoose from "mongoose";

// Define the schema for Career
const CareerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Career title is required"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Career description is required"],
    },
    salary_range: {
      type: String,
      maxlength: [50, "Salary range cannot exceed 50 characters"],
      required: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model based on the schema
const Career = mongoose.model("Career", CareerSchema);

export default Career;
