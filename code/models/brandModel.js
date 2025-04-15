import mongoose from "mongoose";

const brandLogoSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    brandLink: {
      type: String,
      required: true,
    },
    imageKey: {
      type: String,
    },
    bucket: {
      type: String, // The bucket path remains static, like "public/uploads"
    },
    mime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BrandLogo = mongoose.model("Brand Partner", brandLogoSchema);

export default BrandLogo;
