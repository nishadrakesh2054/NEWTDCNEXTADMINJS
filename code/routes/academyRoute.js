import express from "express";
import { getAcademy } from "../controllers/academyController.js";

const router = express.Router();

router.route("/").get(getAcademy);

export default router;
