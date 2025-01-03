import express from "express";
import {
  loginController,
  registerController,
  testController,
  verifyUserController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";


//router obj
const router = express.Router();

//register_route
router.post("/register", registerController);
router.post("/verify", verifyUserController);

//login_route
router.post("/login", loginController);

//testing
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
