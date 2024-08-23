import React, { useEffect, useState } from 'react';
import './slidebar.css';
import imagePath from '../constants/imagePath';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
interface SlidebarProps {
  isSidebarOpen: boolean;
  setHeaderLabel: React.Dispatch<React.SetStateAction<string>>;
}

const Slidebar: React.FC<SlidebarProps> = ({ isSidebarOpen=true, setHeaderLabel }) => {
  const {currentUser,isLoggedIn} = useSelector((store:any)=>store.user);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState('');
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleMenuClick = (menu: string, label: string, path: string) => {
    setOpenMenu(prevMenu => (prevMenu === menu ? '' : menu));
    setHeaderLabel(label);
    navigate(path);
  };
  let forget = ()=>{
    dispatch(signOut({}))
  }
  console.log(count);
  
  useEffect(() => {
  }, [count]);
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
      <div className="logo-details justify-content-center align-items-center">
        <img
          src={imagePath.logo}
          alt="Logo"
          style={{ width: isSidebarOpen ? 'auto' : '50%' }}
        />
      </div>
      <ul className="nav-links">
        <li
          className={openMenu === 'category' ? 'showMenu' : ''}
          onClick={() => handleMenuClick('category', 'Dashboard', '/maincomponent')}
        >
          <div className="iocn-link">
            <a>
              <i><img src={imagePath.dashwordicon} alt="Dashboard Icon" /></i>
              <span className="link_name">DashBoard</span>
            </a>
          </div>
        </li>
        <li className={openMenu === 'employee' ? 'showMenu' : ''}>
          <div className="iocn-link" onClick={() => handleMenuClick('employee', 'Employees Record', '/maincomponent/newemployee')}>
            <a >
              <i><img src={imagePath.employees} alt="Employees Icon" /></i>
              <span className="link_name">Employees Record</span>
            </a>
            <i className='bx bxs-chevron-down arrow'></i>
          </div>
          <ul className="sub-menu">
            <li onClick={() => handleMenuClick('', 'Employees Record', '/maincomponent/newemployee')}><a>Employees Record</a></li>
            <li onClick={() => handleMenuClick('', 'New Employees', '/maincomponent/newemployee')}><a>New Employees</a></li>
            <li onClick={() => handleMenuClick('', 'Old Employees', '/maincomponent/oddemployee')}><a>Old Employees</a></li>
          </ul>
        </li>
        <li className={openMenu === 'recruitment' ? 'showMenu' : ''}>
          <div className="iocn-link" onClick={() => handleMenuClick('recruitment', 'Resume Repository', '/maincomponent/resumerepository')}>
            <a >
              <i><img src={imagePath.recruitment} alt="Recruitment Icon" /></i>
              <span className="link_name">Recruitment</span>
            </a>
            <i className='bx bxs-chevron-down arrow'></i>
          </div>
          <ul className="sub-menu">
            <li onClick={() => handleMenuClick('', 'Resume Repository', '/maincomponent/resumerepository')}><a href="#resume-repository">Resume Repository</a></li>
            <li onClick={() => handleMenuClick('', 'Job Description', '/maincomponent/jobdescription')}><a href="#job-description">Job Description</a></li>
          </ul>
        </li>
        <li className={openMenu === 'payroll' ? 'showMenu' : ''}>
          <div className="iocn-link" onClick={() => handleMenuClick('payroll', 'Salary Sheet', '/maincomponent/salarysheet')}>
            <a >
              <i><img src={imagePath.payroll} alt="Payroll Icon" /></i>
              <span className="link_name">Payroll</span>
            </a>
            <i className='bx bxs-chevron-down arrow'></i>
          </div>
          <ul className="sub-menu">
            <li onClick={() => handleMenuClick('', 'Salary Sheet', '/maincomponent/salarysheet')}><a href="#salary-sheet">Salary Sheet</a></li>
            <li onClick={() => handleMenuClick('', 'Petty Cash', '/maincomponent/pettycash')}><a href="#petty-cash">Petty Cash</a></li>
          </ul>
        </li>
        <li className={openMenu === 'attendance' ? 'showMenu' : ''}>
          <div className="iocn-link" onClick={() => handleMenuClick('attendance', 'In-Out Sheet', '/maincomponent/inoutsheet')}>
            <a >
              <i><img src={imagePath.attendance} alt="Attendance Icon" /></i>
              <span className="link_name">Attendance</span>
            </a>
            <i className='bx bxs-chevron-down arrow'></i>
          </div>
          <ul className="sub-menu">
            <li onClick={() => handleMenuClick('', 'In-Out Sheet', '/maincomponent/inoutsheet')}><a >In-Out Sheet</a></li>
            <li onClick={() => handleMenuClick('', 'Attendance Sheet', '/maincomponent/attendancesheet')}><a >Attendance Sheet</a></li>
            <li onClick={() => handleMenuClick('', 'Leaves', '/maincomponent/leaves')}><a>Leaves</a></li>
          </ul>
        </li>
        <li onClick={()=>forget()} >
          <div className="profile-details" >
            <div className="profile-content">
              <img src={imagePath.birthimg} alt="Profile Img" />
            </div>
            <div className="name-job">
              <div className="profile_name">{currentUser.name}</div>
              <div className="job">Web Designer</div>
            </div>
            <i className='bx bx-log-out'></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
