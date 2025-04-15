import Program from "../models/programModel.js";

// Get all programs
export const getProgram = async (req, res) => {
  try {
    const program = await Program.find();
    if (program.length === 0) {
      return res.status(404).json({ message: "No program found" });
    }
    res.status(200).json({
      message: "Programs fetched successfully",
      program,
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({ message: "Error fetching programs" });
  }
};




// Get program by AcademyID
export const getProgramByAcademyId = async (req, res) => {
    const { academyId } = req.params;
    console.log("Route hit with academyId:", academyId);
    try {
        const programs = await Program.find({ academyId }).populate("academyId", "title active");
        if (programs.length === 0) {
            return res.status(404).json({ message: "No programs found for this academy" });
        }
        if (!programs) {
        return res.status(404).json({ message: "Program not found" });
      }
      res.status(200).json({
        message: "Program fetched successfully",
        programs,
      });
    } catch (error) {
      console.error("Error fetching program by ID:", error);
      res.status(500).json({ message: "Error fetching program by ID" });
    }
  };
