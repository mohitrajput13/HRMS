import express from "express";
import { signUp ,signIn, resetPassword} from "../controllers/userController.js";
const router = express.Router();

// http://192.168.1.27:8080/signup
router.post("/signup",signUp);
 router.post("/signin",signIn);
 router.post("/resetpassword",resetPassword)
export default router;







