import express from 'express';
import Attendance from '../models/attendanceModel.js';

export const addAttendance = async (req, res) => {
  try {
    const existingEntry = await Attendance.findOne({
      date: req.body.date,
      eid: req.body.eid,
    });
    if (existingEntry) {
      return res.status(400).json({ message: "Date and Employee ID already exist" });
    }
    const entries = await Attendance.insertMany(req.body);
    return res.status(200).json({ entries });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const getCurrentDateAttendance = async (req, res) => {
  const date = req.query.date;
  console.log(date);
  
  const existingEntry = await Attendance.find({ date: date });
  if (existingEntry) {
    return res.status(200).json({status:200, data: existingEntry });
  }
  else{
    return res.status(401).json({status:401, message: "No Data Found" });
  }
}
export const getAllAttendance = async (req, res) => {
  try {
    const allAttendance = await Attendance.find({});
    // console.log(allAttendance);
    
    if (allAttendance) {

      return res.status(200).json({status:200,data: allAttendance });
    } else {
      return res.status(400).json({status:400, message: "some error occured" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
// export const getAllAttendance = async (req, res) => {
//   try {
//     const { eid } = req.query;
//     const attendanceRecords = await Attendance.find({ eid }).sort({ date: 1 });

//     if (attendanceRecords.length > 0) {
//       return res.status(200).json({ status: 200, data: attendanceRecords });
//     } else {
//       return res.status(400).json({ status: 400, message: "No attendance records found for the specified employee ID" });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };


