import express, { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  signup,
  resetPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

authRoute.post("/verify-email", verifyEmail);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/reset-password/:token", resetPassword);

export default authRoute;
