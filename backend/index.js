// const express = require("express") // method-1 
import express from "express"; //method-2
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000;
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOption));
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Started at PORT: ${PORT}`);
})