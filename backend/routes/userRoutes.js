import express from "express";
import { login, register, logout, getUser,getAllUsers,deleteUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/all",getAllUsers)
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.delete("/delete/:userId", deleteUser);

export default router;
