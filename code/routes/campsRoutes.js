import express from "express";
import { getAllCamps } from "../controllers/campsController.js";

const router = express.Router();

router.route("/").get(getAllCamps);

export default router;
