import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth/auth.router.js"
const app=express();
const Port=process.env.PORT||4000;

configDotenv({
    path:'./.env'
})

await mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB connected Successfully");
    
}).catch((err)=>{
    console.log("DB connection error");
    
})

app.use(cookieParser())
app.use(express.json())
app.use(cors({origin:'http://localhost:5173/',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ]
}))

app.use("/api/auth",authRouter);
app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log("app is listening on http://localhost:"+process.env.Port);
    
})