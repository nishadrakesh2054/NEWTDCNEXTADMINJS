import Camps from "../models/SpecialCapmsModel.js";

// Get all galleries
export const getAllCamps = async (req, res) => {
  try {
    const specialCamps = await Camps.find();
    if (specialCamps.length == 0) {
      return res.status(404).json({ message: "No specialCamps found" });
    }
    res.status(200).json({
      message: "specialCamps fetched successfully",
      specialCamps,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
