import Game from "../models/galleryModel.js";

/**
 * Fetch all active games
 */
export const getAllActiveGames = async (req, res) => {
  try {
    const games = await Game.find({ active: true }); // Fetch all active games
    if (games.length === 0) {
      return res.status(404).json({ message: "No active games found." });
    }
    res.status(200).json({
      message: "Active games retrieved successfully.",
      data: games,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching games." });
  }
};

/**
 * Fetch games by type
 */
export const getGamesByType = async (req, res) => {
  const { type } = req.params;
  try {
    const games = await Game.find({ type, active: true }); // Fetch active games by type
    if (games.length === 0) {
      return res
        .status(404)
        .json({ message: `No active games found for type: ${type}.` });
    }
    res.status(200).json({
      message: `Games of type '${type}' retrieved successfully.`,
      data: games,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching games by type.",
      details: error.message,
    });
  }
};
