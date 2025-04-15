
import Application from "../models/applicationModel.js";

// Create a new application
export const createApplication = async (req, res) => {
  try {
    const { applicantName, email, phone, resumeUrl, coverLetter, careerId } = req.body;

    // Validate the required fields
    if (!applicantName || !email || !careerId) {
      return res.status(400).json({ message: "Applicant name, email, and career ID are required" });
    }

    // Create a new application document
    const newApplication = new Application({
      applicantName,
      email,
      phone,
      resumeUrl,
      coverLetter,
      careerId,
    });

    // Save the new application to the database
    const savedApplication = await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ message: "Error submitting application" });
  }
};
