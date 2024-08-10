import React, { useState } from "react";
import './attendence.css'
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";

const AttendanceSheet = () => {
  const [hidden, setHidden] = useState(true);
  const [attendance, setAttendance] = useState("");

  return (
    <>
      <div className="d-flex p-3 flex-column">
        <div className="first d-flex flex-row">
          <div className="w-75">
            <p>1 September 2023</p>
          </div>
          <div className="w-25">
            <InputField classname="inputSize200" text={'date'} />
          </div>
        </div>
        <div className="second p-2  w-100">
          <table className="table">
            <thead>
              <tr>
                <th className="fixed-width">Eid</th>
                <th className="fixed-width">Name</th>
                <th className="fixed-width">D.O.B</th>
                <th className="fixed-width">D.O.J</th>
                <th className="expandable justify-content-end align-items-end d-flex">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="fixed-width" scope="row">
                  1
                </th>
                <td className="fixed-width">Mark</td>
                <td className="fixed-width">Otto</td>
                <td className="fixed-width">@mdo</td>
                <td
                  className={`expandable d-flex justify-content-end align-items-end ${
                    attendance === "Present" ? "text-success" : "text-danger"
                  }`}
                >
                  {hidden && (
                    <>
                      <ButtonField
                        label="Absent"
                        onClick={() => {
                          setAttendance("Absent");
                          setHidden(false);
                        }}
                        classname={"btn btn-outline-dark  me-2"}
                      />
                      <ButtonField
                        label="Present"
                        onClick={() => {
                          setAttendance("Present");
                          setHidden(false);
                        }}
                        classname={"btn btn-success"}
                      />
                    </>
                  )}
                  {attendance === "" ? "" : attendance}
                </td>
                <td className="align-content-center">
                  <div className="dropdown">
                    <button className="dropbtn btn btn-light">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div className="dropdown-content">
                      <a href="#"><i className="fa fa-sun-o"></i>Half Day</a>
                      <a href="#"><i className="fa fa-sun-o"></i>Early Leave</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AttendanceSheet;
