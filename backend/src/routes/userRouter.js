import express from "express";
import { signUp } from "../controllers/userController.js";
const router = express.Router();

// http://localhost:8080/signup
router.post("/signup",signUp);
// router.post("/signin",signIn);
export default router;







