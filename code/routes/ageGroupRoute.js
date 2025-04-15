import express from "express";
import { getAgeData ,getAgeGroupsByProgramId} from "../controllers/ageController.js";

const router = express.Router();

router.route("/").get(getAgeData);
router.get("/program/:programId", getAgeGroupsByProgramId);

export default router;
