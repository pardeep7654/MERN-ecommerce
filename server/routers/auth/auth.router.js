import { Router } from "express";
import { registerUser,logoutUser, loginUser,cheackAuth } from "../../controllers/auth/auth.controller.js";

const router=Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/check-auth",cheackAuth,(req,res)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
        message:"Authenticated User",
        user
    })
})

export default router