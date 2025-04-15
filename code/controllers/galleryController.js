import Gallery from "../models/galleryModel.js";

// Get all galleries
const getGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    if (galleries.length == 0) {
      return res.status(404).json({ message: "No galleries found" });
    }
    res.status(200).json({
      message: "Galleries fetched successfully",
      galleries,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching galleries", error });
  }
};

// Create a new gallery
const createGallery = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    const savedGallery = await gallery.save();
    res.status(201).json({
      message: "Gallery created successfully",
      gallery: savedGallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating gallery", error });
  }
};

// Update an existing gallery
const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGallery = await Gallery.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
    if (!updatedGallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json({
      message: "Gallery updated successfully",
      gallery: updatedGallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating gallery", error });
  }
};

// Delete a gallery
const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGallery = await Gallery.findByIdAndDelete(id);
    if (!deletedGallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting gallery", error });
  }
};



export { getGalleries, createGallery, updateGallery, deleteGallery };
