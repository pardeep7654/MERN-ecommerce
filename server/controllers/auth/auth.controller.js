import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

//Register
export const registerUser = async (req, res) => {
  const {  email, password, name, phone } = req.body;
  try {
    const checkemail = await User.findOne({
      email,
    });
    if (checkemail) {
      return res.json({
        success: false,
        message: "User Already exists Please try with different email",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 8);
    const newUser = new User({
      password: hashPassword,
      email,
      phone,
      name,
    });
    await newUser.save();
    const token = jwt.sign(
      {
        email: newUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        success: true,
        message: "Registration Successfuly",
        token,
        newUser,
      });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error Occured",
    });
  }
};

//Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser=await User.findOne({email});
    if (!checkUser) {
        return res.json({
            success:false,
            message:"User Not exists,please register first"
        });
    }
    const checkPassword=await bcrypt.compare(password,checkUser.password);
    if (!checkPassword) {
        return res.status(400).json({
            success:false,
            message:"incorrect Password"
        })
    }
    const token=jwt.sign({email:checkUser.email},process.env.SECRET_KEY,{expiresIn:"3d"});
    res.cookie("token",token,{httpOnly:true,secure:false}).json({
        success:true,
        message:"LoggedinSuccessfuly"
        ,checkUser
    })
  } catch (e) {
    res.status(500).json({
        success:false,
        message:"Internal Server"
    })
  }
};
//Logout
export const logoutUser = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logout successfuly",
  });
};

//Auth Middleware
