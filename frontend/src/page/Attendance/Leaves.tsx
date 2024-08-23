import React, { useState } from "react";
import './attendence.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./leaves.css";
import DatePicker from "react-datepicker";

const Leaves: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const currentYear = today.getFullYear();
  const maxDate = new Date(currentYear, today.getMonth() + 1, 0);
  return (
    <div className="d-flex">
      <main className="content flex-grow-1 ">
        <div className="row mb-2">
          <div className="col-md-4 text-center">
            <div className="circle-box  text-white ">
              <CircularProgressbar
                value={75}
                text={`75%`}
                styles={buildStyles({
                  pathColor: "#007bff",
                  textColor: "#007bff",
                  trailColor: "#e6e6e6",
                })}
              />

            </div>
            <p>Total Leave</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="circle-box  text-white ">
              <CircularProgressbar
                value={50}
                text={`50`}
                styles={buildStyles({
                  pathColor: "#ffc107",
                  textColor: "#ffc107",
                  trailColor: "#e6e6e6",
                })}
              />

            </div>
            <p>Half Days</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="circle-box text-white ">
              <CircularProgressbar
                value={20}
                text={`20%`}
                styles={buildStyles({
                  pathColor: "#28a745",
                  textColor: "#28a745",
                  trailColor: "#e6e6e6",
                })}
              />

            </div>
            <p>Early Leaves</p>
          </div>
        </div>

        <div className="calendar-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label >Calender</label>
            <div className="d-flex gap-2"><select className="form-select w-auto">
              <option>Eid 402</option>

            </select>
            <div className="center calendar" >
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              monthsShown={1}
              className="form-control"
              maxDate={maxDate}
            />
          </div></div>

          </div>
          <div style={{overflowX:'scroll'}}>
          <table className="table table-bordered calendar-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fay Hill</td>
                <td></td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td className="holiday">28</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </main>
      <aside className="right-sidebar bg-light p-4">
        <h5>Upcoming Public Holidays</h5>
        <ul className="list-unstyled">
          <li>8 July, 2023 - Eid al-Adha</li>
          <li>8 July, 2023 - Eid al-Adha</li>
          <li>8 July, 2023 - Eid al-Adha</li>
        </ul>
      </aside>
    </div>
  );
};

export default Leaves;
