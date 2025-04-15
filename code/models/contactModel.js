// models/contactModel.js
import mongoose from "mongoose";

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Create the model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
