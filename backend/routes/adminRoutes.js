import express from "express";
import { registerAdmin, loginAdmin, logoutAdmin, getAdmin } from "../controllers/AdminController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Admin Registration Route
router.post("/register", registerAdmin);

// Admin Login Route
router.post("/login", loginAdmin);

// Admin Logout Route
router.get("/logout", isAuthenticated, logoutAdmin);

// Get Admin Details (protected route)
router.get("/getadmin", isAuthenticated, getAdmin);

export default router;
