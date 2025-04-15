import BrandLogo from "../models/brandModel.js";
import { deleteFile } from "../utils/upload.js"; // Import deleteFile utility

// Create a new brand logo
export const createBrandLogo = async (req, res) => {
  try {
    const { brandName, brandLink } = req.body;

    // Ensure the file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Extract file details from multer
    const { filename, mimetype, destination } = req.file;

    const newBrandLogo = new BrandLogo({
      brandName,
      brandLink,
      image: `${destination}${filename}`, // File path
      imageKey: filename, // Unique file name
      bucket: destination, // Directory name
      mime: mimetype, // MIME type
    });

    const savedBrandLogo = await newBrandLogo.save();
    res.status(201).json({
      message: "Brand logo created successfully",
      brandLogo: savedBrandLogo,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating brand logo", error });
  }
};

// Get all brand logos
export const getBrandLogos = async (req, res) => {
  try {
    const brandLogos = await BrandLogo.find();
    res.status(200).json({
      message: "Brand logos fetched successfully",
      brandLogos,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching brand logos", error });
  }
};

// Update a brand logo
export const updateBrandLogo = async (req, res) => {
  const { id } = req.params;
  try {
    const logoToUpdate = await BrandLogo.findById(id);
    if (!logoToUpdate) {
      return res.status(404).json({ message: "Brand logo not found" });
    }

    // Handle file upload if a new file is provided
    if (req.file) {
      const { filename, mimetype, destination } = req.file;

      // Delete the old file
      deleteFile(logoToUpdate.imageKey);

      // Update with the new file details
      logoToUpdate.image = `${destination}${filename}`;
      logoToUpdate.imageKey = filename;
      logoToUpdate.bucket = destination;
      logoToUpdate.mime = mimetype;
    }

    // Update other fields
    logoToUpdate.brandName = req.body.brandName || logoToUpdate.brandName;
    logoToUpdate.brandLink = req.body.brandLink || logoToUpdate.brandLink;

    const updatedBrandLogo = await logoToUpdate.save();
    res.status(200).json(updatedBrandLogo);
  } catch (error) {
    res.status(500).json({ message: "Error updating brand logo", error });
  }
};

// Delete a brand logo
export const deleteBrandLogo = async (req, res) => {
  const { id } = req.params;
  try {
    const logoToDelete = await BrandLogo.findById(id);
    if (!logoToDelete) {
      return res.status(404).json({ message: "Brand logo not found" });
    }

    // Delete the associated file
    deleteFile(logoToDelete.imageKey);

    await BrandLogo.findByIdAndDelete(id);
    res.status(200).json({ message: "Brand logo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting brand logo", error });
  }
};
