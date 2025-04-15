import mongoose from "mongoose";
const academySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Academy = mongoose.model("Academy", academySchema);

export default Academy;
