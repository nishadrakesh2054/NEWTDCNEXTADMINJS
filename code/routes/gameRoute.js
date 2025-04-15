import express from "express";
import { getAllActiveGames, getGamesByType } from "../controllers/gameController.js";

const router = express.Router();

// Route to fetch all active games
router.get("/", getAllActiveGames);

// Route to fetch games by type
router.get("/type/:type", getGamesByType);

export default router;
