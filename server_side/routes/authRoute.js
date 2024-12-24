import express from "express";
import { registerController } from "../controllers/authController.js";

//router obj
const router = express.Router();

//register_route
router.post("/register", registerController);

export default router;
