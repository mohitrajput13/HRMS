import express from "express";
import mongoose from "mongoose";
import {  retrieveOTP } from "./models/otpModel.js";
import cors from 'cors';
import sendMail from "./sendMail.js";
import userRouter from "./routes/userRouter.js";
import employeeRouter from "./routes/employeeRouter.js";
import  attendanceRouter  from "./routes/attendanceRouter.js";
import dotenv from 'dotenv'
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use('/resumes', express.static(path.join(__dirname, '../resumes')));
app.use('/images', express.static(path.join(__dirname, '../images')));
dotenv.config();
console.log(process.env.baseUrl,"=======================");
const baseUrl = process.env.baseUrl;
const port = process.env.PORT || 8080;
const uri = "mongodb+srv://mohitrajputntf:1Urg6iTQwN0Jn2pH@cluster0.lyrp7km.mongodb.net/";
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(attendanceRouter);
app.use(employeeRouter);
app.post("/mail", sendMail);
app.post("/otp",retrieveOTP);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
  });
  app.listen(port,"192.168.1.27", () => {
    console.log(`Server is running on port ${port}`);
  });

