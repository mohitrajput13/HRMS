import React from 'react';
import imagePath from '../constants/imagePath';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  label?: string;
  toggleSidebar?: React.MouseEventHandler<HTMLElement>;
  setHiddenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, label, setHiddenSidebar }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (setHiddenSidebar) {
      setHiddenSidebar(prev => !prev);
    }
    navigate('/maincomponent/profile');
  };

  return (
    <div className="home-content">
      <div className="d-flex">
        <i className="bx bx-menu" onClick={toggleSidebar}></i>
        <span className="text">{label}</span>
      </div>

      <div className="d-flex">
        <span className="pe-3 py-2 d-lg-block d-md-block d-sm-block d-none">
          <i className="fa fa-search"></i>
        </span>
        <img
          onClick={handleProfileClick}
          style={{ width: "50%" }}
          src={imagePath.profile}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
