import { Route, Routes } from 'react-router-dom';
import './style/commonStyle.css';
import LoginPage from './page/LoginSignup/LoginPage';
import SignUpPage from './page/LoginSignup/SignUpPage';
import HomePage from './page/HomePage';
import MainComponent from './page/MainComponent';
import DashBoard from './page/DashBoard/DashBoard';
import Salary from './page/Payroll/Salary';
import NewEmployees from './page/Employees/NewEmployees';
import OldEmployees from './page/Employees/OldEmployees';
import ResumeRepository from './page/Recruitment/ResumeRepository';
import JobDescription from './page/Recruitment/JobDescription';
import PettyCash from './page/Payroll/PettyCash';
import InOutSheet from './page/Attendance/In-Out-Sheet';
import AttendanceSheet from './page/Attendance/AttendanceSheet';
import Profile from './page/Profile';
import ForgetPassword from './page/LoginSignup/ForgetPassword';
import Auth from './auths/Auth'
import 'react-toastify/dist/ReactToastify.css';
import Leaves from './page/Attendance/Leaves';
import { useState } from 'react';

import store from './redux/Store';
function App() {
  const [sidebarOpen, setIsSidebarOpen] = useState(true);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/maincomponent" element={<Auth><MainComponent sidebarOpen={sidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/></Auth>}>
          <Route index element={<DashBoard sidebarOpen={sidebarOpen}/>} />
          <Route path="newemployee" element={<NewEmployees />} />
          <Route path="oddemployee" element={<OldEmployees />} />
          <Route path="resumerepository" element={<ResumeRepository />} />
          <Route path="jobdescription" element={<JobDescription />} />
          <Route path="salarysheet" element={<Salary />} />
          <Route path="pettycash" element={<PettyCash />} />
          <Route path="inoutsheet" element={<InOutSheet />} />
          <Route path="attendancesheet" element={<AttendanceSheet />} />
          <Route path="profile" element={<Profile />} />
          <Route path="leaves" element={<Leaves />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
