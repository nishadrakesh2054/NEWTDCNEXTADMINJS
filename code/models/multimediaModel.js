import mongoose from "mongoose";

const multimediaSchema = new mongoose.Schema(
  {
    images: {
        type: [String], 
      },
    imageKey: {
      type: [String],
    },
    bucket: {
      type: [String],
    },
    mime: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Multimedia = mongoose.model("Multimedia", multimediaSchema);

export default Multimedia;
