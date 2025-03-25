import express, { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  signup,
  resetPassword,
  verifyEmail,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const authRoute = Router();

authRoute.get("/check-auth", verifyToken, checkAuth);

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

authRoute.post("/verify-email", verifyEmail);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/reset-password/:token", resetPassword);

export default authRoute;
