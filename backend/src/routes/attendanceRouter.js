import express from 'express';
import { addAttendance, getAllAttendance, getCurrentDateAttendance } from '../controllers/attendenceController.js';
const attendanceRouter = express.Router();
attendanceRouter.post('/addAttendance',addAttendance);
attendanceRouter.get("/getCurrentDateattendance", getCurrentDateAttendance);
attendanceRouter.get("/getallattendance", getAllAttendance);
export default attendanceRouter;