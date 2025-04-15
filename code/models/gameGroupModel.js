import mongoose from "mongoose";

const GameGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Group name is required"],
      trim: true,
      minlength: [1, "Group name must be at least 1 character"],
      maxlength: [50, "Group name cannot exceed 50 characters"],
    },
    description: {
      type: String,
      default: null,
    },
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game", // Reference to the "Games" collection
      required: [true, "Game ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

const GameGroup = mongoose.model("GameGroup", GameGroupSchema);

export default GameGroup;
