import mongoose from "mongoose";
import Employee from "./employeeModel.js";

const attendanceSchema = mongoose.Schema({
    eid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
    },
    date: {
        type: String,
        required: true,
    },
    attendance:{
        type: String,
    },
    status: {
        type: String,
    },
});

const Attendance = mongoose.model("attendance", attendanceSchema);

export default Attendance;
