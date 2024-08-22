import React, { useEffect, useState } from "react";
import "./attendence.css";
import ButtonField from "../../components/ButtonField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AttendanceSheet = () => {
  const [eid, setEid] = useState<string>("");
  const [attendance, setAttendance] = useState<any[]>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isAbsent, setIsAbsent] = useState<string | null>(null);
  const [allEmployees, setAllEmployees] = useState<any[]>([]);
  const [allAttendanceData, setAllAttendanceData] = useState<any[]>([]);

  const options: any = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(startDate).toLocaleDateString("en-US", options);
  const today = new Date();
  const currentYear = today.getFullYear();
  const maxDate = new Date(currentYear, today.getMonth() + 1, 0);
  const formattedDate = today.toLocaleDateString("en-US", options);
  const currentDate = today.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
  const monthYearString = new Date(startDate).toLocaleString("default", { month: "long" });
  const numberOfDaysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
  console.log(attendance);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.27:8080/getAllEmployee");
        const result = await response.json();
        setAllEmployees(result.user);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const getCurrentDateData = async () => {
      try {
        const response = await fetch(`http://192.168.1.27:8080/getCurrentDateattendance?date=${currentDate}`);
        const result = await response.json();
        setAttendance(result.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    getCurrentDateData();
  }, [currentDate]);

  useEffect(() => {
    const getAllAttendanceData = async () => {
      try {
        if (eid) {
          const response = await fetch(`http://192.168.1.27:8080/getallattendance?eid=${eid}`);
          const result = await response.json();
          setAllAttendanceData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getAllAttendanceData();
  }, [eid]);

  const isPastDate = (dateString: string) => {
    const inputDate = new Date(`${dateString} ${currentYear}`);
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  };

  const setAttendanceData = async (attendanceRecord: any) => {
    try {
      await axios.post("http://192.168.1.27:8080/addAttendance", attendanceRecord);
    } catch (error) {
      console.error("Error posting attendance data: ", error);
    }
  };

  const setAttendance1 = (eid: string, attendanceStatus: string, status: string) => {
    const updatedAttendance = attendance.map((att: any) =>
      att.eid === eid && att.date === currentDate
        ? { ...att, attendance: attendanceStatus, status: status }
        : att
    );

    const existingAttendance = attendance.find(
      (att: any) => att.eid === eid && att.date === currentDate
    );

    if (attendanceStatus === "absent") {
      setAttendanceData({ eid, attendance: attendanceStatus, date: currentDate, status });
      setIsAbsent(eid);
    } else {
      setIsAbsent(null);
    }

    if (!existingAttendance) {
      setAttendance([...attendance, { eid, attendance: attendanceStatus, date: currentDate, status }]);
    } else {
      setAttendance(updatedAttendance);
      setAttendanceData({ eid, attendance: attendanceStatus, date: currentDate, status });
    }
  };

  const monthDays = Array.from(
    { length: numberOfDaysInMonth },
    (_, i) => `${i + 1} ${monthYearString}`
  );

  return (
    <div className="d-flex p-3 flex-column">
      <div className="d-flex flex-row mb-3">
        <div className="w-75">
          <p>{formattedDate}</p>
        </div>
        <div className="center" style={{ width: "220px" }}>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            monthsShown={1}
            className="form-control"
            maxDate={maxDate}
          />
        </div>
      </div>
      <div
        className="w-100"
        style={{ overflowX: formattedDate !== date ? "auto" : "clip" }}
      >
        <table className="table table-responsive">
          <thead>
            <tr>
              <th style={{ minWidth: "140px" }}>Eid</th>
              <th style={{ minWidth: "140px" }}>Name</th>
              <th style={{ minWidth: "140px" }}>D.O.B</th>
              <th style={{ minWidth: "140px" }}>D.O.J</th>
              {formattedDate === date ? (
                <th style={{ minWidth: "140px" }}>Attendance</th>
              ) : (
                monthDays.map((day: string) =>
                  isPastDate(day) ? (
                    <th style={{ minWidth: "140px" }} key={day}>
                      {day}
                    </th>
                  ) : null
                )
              )}
            </tr>
          </thead>
          <tbody>
            {allEmployees.length > 0 &&
              allEmployees.map((item: any) => (
                <tr key={item.eid}>
                  <th style={{ minWidth: "140px" }}>{item.eid}</th>
                  <th style={{ minWidth: "140px" }}>{item.firstname}</th>
                  <th style={{ minWidth: "140px" }}>{item.dob}</th>
                  <th style={{ minWidth: "140px" }}>{item.doj}</th>
                  {formattedDate === date ? (
                    <td className="width">
                      {attendance.some(
                        (att: any) => att.eid === item.eid && att.date === currentDate
                      ) ? (
                        <span
                          className={
                            attendance.find(
                              (att: any) =>
                                att.eid === item.eid && att.date === currentDate
                            )?.attendance === "present"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {
                            attendance.find(
                              (att: any) =>
                                att.eid === item.eid && att.date === currentDate
                            )?.attendance
                          }
                        </span>
                      ) : (
                        <div>
                          <ButtonField
                            label="Absent"
                            onClick={() => setAttendance1(item.eid, "absent", "false")}
                            classname={"btn btn-outline-danger"}
                          />
                          <ButtonField
                            label="Present"
                            onClick={() => setAttendance1(item.eid, "present", "")}
                            classname={"btn btn-success ms-2"}
                          />
                        </div>
                      )}
                    </td>
                  ) : (
                    monthDays.map((day: string) => (
                      allAttendanceData.some((data: any) =>
                        data.date === day && item.eid === data.eid
                          ? (
                            <td
                              className={`width ${data.status === "full day"
                                  ? "text-success"
                                  : data.status === "half day"
                                    ? "text-warning"
                                    : data.status === "early day"
                                      ? "text-primary"
                                      : "text-danger"
                                }`}
                              key={`${item.eid}-${day}`}
                            >
                              {data.attendance === "present" ? "P" : "A"}
                            </td>
                          ) : (
                            <td key={`${item.eid}-${day}`}></td>
                          ))
                    )))
                  }
                  {formattedDate === date && (
                    <td className="text-center">
                      <div className="dropdown">
                        <button className="dropbtn btn btn-light">
                          <i className="fa fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-content">
                          <ButtonField
                            classname={"bg-light text-dark"}
                            onClick={() => setAttendance1(item.eid, "present", "full day")}
                            label="Full Day"
                            disabled={isAbsent === item.eid}
                          />
                          <ButtonField
                            classname={"bg-light text-dark my-1"}
                            onClick={() => setAttendance1(item.eid, "present", "half day")}
                            label="Half Day"
                            disabled={isAbsent === item.eid}
                          />
                          <ButtonField
                            classname={"bg-light text-dark"}
                            onClick={() => setAttendance1(item.eid, "present", "early leave")}
                            label="Early Leave"
                            disabled={isAbsent === item.eid}
                          />
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSheet;
