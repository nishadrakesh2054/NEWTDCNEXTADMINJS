import HeroImage  from "../models/HeroModel.js";

// Get all galleries
 export const getHeros = async (req, res) => {
  try {
    const heros = await HeroImage .find();
    if (heros.length == 0) {
      return res.status(404).json({ message: "No heros found" });
    }
    res.status(200).json({
      message: "heros fetched successfully",
      heros,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};

