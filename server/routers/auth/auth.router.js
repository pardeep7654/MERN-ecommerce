import { Router } from "express";
import { registerUser,logoutUser, loginUser } from "../../controllers/auth/auth.controller.js";

const router=Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);


export default router