import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();
const Port=process.env.PORT||4000;

await mongoose.connect("mongodb+srv://pardeep814611:<db_password>@cluster0.1qekz.mongodb.net/")
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
app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.listen(Port,()=>{
    console.log("app is listening on http://localhost:"+Port);
    
})