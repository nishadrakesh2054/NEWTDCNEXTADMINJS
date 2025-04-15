import express from "express";
import {
  getCareerPosts,
  getCareerPostById,
} from "../controllers/careerController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getCareerPosts);

// Get a career post by ID
router.route("/:id").get(getCareerPostById);

export default router;
