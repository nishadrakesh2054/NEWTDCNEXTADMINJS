import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name cannot be empty."],
      minlength: [3, "Category name must be between 3 and 255 characters."],
      maxlength: [255, "Category name must be between 3 and 255 characters."],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
