import ageGroup from "../models/ageGroupModel.js";

// Get all galleries
export const getAgeData = async (req, res) => {
  try {
    const agegroupData = await ageGroup.find();
    if (agegroupData.length == 0) {
      return res.status(404).json({ message: "No agegroupData found" });
    }
    res.status(200).json({
      message: "agegroupData fetched successfully",
      agegroupData,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};

// Get age groups by programId
export const getAgeGroupsByProgramId = async (req, res) => {
  const { programId } = req.params;
  try {
    const ageGroups = await ageGroup
      .find({ programId })
      .populate("programId", "name description");
    if (!ageGroups || ageGroups.length === 0) {
      return res
        .status(404)
        .json({ message: "No age groups found for this program" });
    }
    res.status(200).json({
      message: "Age groups fetched successfully",
      ageGroups,
    });
  } catch (error) {
    console.error("Error fetching age groups by program ID:", error);
    res
      .status(500)
      .json({ message: "Error fetching age groups by program ID" });
  }
};
