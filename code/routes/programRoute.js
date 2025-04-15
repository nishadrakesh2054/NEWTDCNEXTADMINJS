import express from "express";
import {
  getProgram,
  getProgramByAcademyId,
} from "../controllers/programController.js";

const router = express.Router();

router.route("/").get(getProgram);

router.route("/academy/:academyId").get(getProgramByAcademyId);

export default router;
