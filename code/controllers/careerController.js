import Career from "../models/careerModel.js";

// Get all career posts
export const getCareerPosts = async (req, res) => {
  try {
    const careerPosts = await Career.find(); // Retrieve all career posts
    if (careerPosts.length === 0) {
      return res.status(404).json({ message: "No career posts found" });
    }
    res.status(200).json({
      message: "Career posts fetched successfully",
      careerPosts, // Return the career posts
    });
  } catch (error) {
    console.error("Error fetching career posts:", error);
    res.status(500).json({ message: "Error fetching career posts" });
  }
};

// Get career post by ID
export const getCareerPostById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from the request parameters
    const careerPost = await Career.findById(id); // Find the career post by ID
    
    if (!careerPost) {
      return res.status(404).json({ message: "Career post not found" });
    }
    
    res.status(200).json({
      message: "Career post fetched successfully",
      careerPost, // Return the career post
    });
  } catch (error) {
    console.error("Error fetching career post by ID:", error);
    res.status(500).json({ message: "Error fetching career post by ID" });
  }
};
