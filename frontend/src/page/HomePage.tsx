import React from 'react';
import Navbar from '../components/Navbar';
import imagePath from '../constants/imagePath';  
import './homePage.css'
import ButtonField from '../components/ButtonField';
const HomePage = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <Navbar />
      </div>
    </div>

    <div className="row w-100  d-flex justify-content-center">
        <div className="col-12 col-md-8 d-flex justify-content-center">
          <div className="p-4  text-center d-flex flex-column align-items-center">
            <h2>
              <span style={{color:"#00C3FF"}}>Teamwork</span> Makes the Dream Work
            </h2>
            <p>
              It involves various activities such as job analysis, job posting, candidate search, candidate screening, interviewing, and onboarding.
              Effective recruitment management is essential for organizations to find the right candidates.
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
        <ButtonField classname="navbar-toggler d-block d-lg-block buttonSize136_yellow" type='button' label='Admin'/>
        <ButtonField classname="navbar-toggler d-block d-lg-block buttonSize136_yellow" style={{backgroundColor:"#00C3FF"}} type='button' label='Employee List'/>
        </div>
      </div>

    <div className="dash-third">
          
          <div className='dashthird-first ' >
            <div className='thrid-left-container' >
              <img src={imagePath.rightimaged2} alt="Left Image 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='thrid-right-container'>
              <img src={imagePath.rightimaged1} alt="Right Image 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className='dashthird-second' >
            <div className='thrid-left-container'>
              <img src={imagePath.leftimaged2} alt="Left Image 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='thrid-right-container'>
              <img src={imagePath.rightimaged2} alt="Right Image 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
   

  );
};


export default HomePage;
