import express from "express";
import { register } from "../controllers/authController.js";

export const router = express.Router();

router.post("/register", register);
