import express from "express";
import { getHeros } from "../controllers/HeroController.js";

const router = express.Router();

router.route("/").get(getHeros);

export default router;
