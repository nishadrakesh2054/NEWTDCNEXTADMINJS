import Academy from "../models/academyModel.js";

// Get all galleries
export const getAcademy = async (req, res) => {
  try {
    const academy = await Academy.find();
    if (academy.length == 0) {
      return res.status(404).json({ message: "No academy found" });
    }
    res.status(200).json({
      message: "academy fetched successfully",
      academy,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
