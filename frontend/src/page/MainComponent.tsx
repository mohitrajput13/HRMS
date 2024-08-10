import { useState } from 'react';
import Slidebar from '../components/Slidebar';
import Header from '../components/Header';
import imagePath from '../constants/imagePath';
import Profile from './Profile';
import { Outlet } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

interface ActiveState {
  paris?: boolean;
  london?: boolean;
}
const MainComponent = () => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true)
  const [sidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState<ActiveState>({ paris: false, london: true });
  const [headerLabel, setHeaderLabel] = useState('Dashboard');
  console.log(hiddenSidebar);
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  return <>
  <ToastContainer/>
    {hiddenSidebar && <Slidebar isSidebarOpen={sidebarOpen} setHeaderLabel={setHeaderLabel} />}
    {hiddenSidebar && <section className="home-section">
      <Header toggleSidebar={toggleSidebar} label={headerLabel} setHiddenSidebar={setHiddenSidebar}  />
        <Outlet/> 
    </section>}
    {!hiddenSidebar && <Profile active={active} setactive={setActive} setHiddenSidebar={setHiddenSidebar}/>} 
   {/* <Demo/> */}
    {/* <Calendar/> */}
  </>
};

export default MainComponent;
