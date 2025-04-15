// routes/contactRoutes.js
import express from "express";
import {
  getContacts,
  createContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Routes for CRUD operations on contacts
router.route("/").get(getContacts).post(createContact);

export default router;
