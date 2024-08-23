import { useEffect, useState } from 'react';
import imagePath from '../constants/imagePath';
import './Profile.css'
import ButtonField from '../components/ButtonField';
import InputFeild from '../components/InputField';
import { Link, useNavigate } from 'react-router-dom';
import { log } from 'console';

interface ActiveState {
    paris?: boolean;
    london?: boolean;
}

interface ProfileProps {
    active?: { paris?: boolean, london?: boolean };
    setactive?: React.Dispatch<React.SetStateAction<ActiveState>>;
    setHiddenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ active, setactive ,setHiddenSidebar}: ProfileProps) => {
    const navigate = useNavigate();
    const handleTabClick = () => {
        {setHiddenSidebar&&setHiddenSidebar(true)};
        navigate(-1);
     };

    return (
        <div className="container rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
             
             <div onClick={handleTabClick} className="d-flex flex-row align-items-center back">
                    <i className="bx bxs-chevron-left arrow'mr-1 mb-1">Full Employee Profile</i>
                </div>
             
            </div>
            <div className="profile-section d-flex flex-row flex-wrap">
                <div className="col-md-4 d-flex justify-content-center align-items-center border-right">
                    <img className="w-50 rounded-circle" src={imagePath.profilelogo} alt="Profile" />
                </div>
                <div className="col-md-8">
                    <div className='p-3'>
                        <div className="row mt-2">
                            <div className="col-md-8 col-sm-6 col-8">
                                <div>{"Mohit Rajput"}</div>
                                <div><label>{"MERN Developer"}</label></div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-4 text-right">
                                <a className="text-decoration-none d-flex justify-content-center align-items-center">
                                    <i className="fa fa-edit" style={{ color: '#FEA633', maxHeight: '20px' }}>Edit</i>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3"><label>Date Of Joining</label></div>
                            <div className="col-md-9"><label>15/07/2024</label></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3"><label>Contact No</label></div>
                            <div className="col-md-9"><label>6260335083</label></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3"><label>Email</label></div>
                            <div className="col-md-9"><label>mohit@gmail.com</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab">
                <button
                    className={`tablinks ${active?.london ? 'active' : ''}`}
                    onClick={() => { setactive && setactive({ london: true, paris: false }) }}
                >
                    Employee Information
                </button>
                <button
                    className={`tablinks ${active?.paris ? 'active' : ''}`}
                    onClick={() => { setactive && setactive({ london: false, paris: true }) }}
                >
                    Payroll Details
                </button>
            </div>
            {active?.london && (
                <div className='tabcontent d-flex flex-column'>
                    <h4>Employee</h4>
                    <div id="London" className="d-flex flex-row flex-wrap">
                        <div className='col-md-5 col-sm-6'>
                            <div className='p-3'>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Date Of Joining</label></div>
                                    <div className="col-md-6"><label>15/07/2024</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Contact No</label></div>
                                    <div className="col-md-6"><label>6260335083</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Email</label></div>
                                    <div className="col-md-6"><label>mohit@gmail.com</label></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-6'>
                            <div className='p-3'>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Date Of Joining</label></div>
                                    <div className="col-md-6"><label>15/07/2024</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Contact No</label></div>
                                    <div className="col-md-6"><label>6260335083</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Email</label></div>
                                    <div className="col-md-6"><label>mohit@gmail.com</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-sm bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Attachments</a>
                            <ButtonField classname="navbar-toggler d-block d-lg-block buttonSize136_yellow" type='button' label='Upload' />
                        </div>
                    </nav>
                    <div className='d-flex flex-row flex-wrap gap-3'>
                        <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                            <img className='w-100' src={imagePath.certificate} alt="Certificate" />
                            <div className="card-footer">
                                <h5 className="card-title">Offer Letter</h5>
                                <p className="card-text">06/07/2024</p>
                            </div>
                        </div>
                        <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                            <img className='w-100' src={imagePath.certificate} alt="Certificate" />
                            <div className="card-footer">
                                <h5 className="card-title">Offer Letter</h5>
                                <p className="card-text">06/07/2024</p>
                            </div>
                        </div>
                        <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                            <img className='w-100' src={imagePath.certificate} alt="Certificate" />
                            <div className="card-footer">
                                <h5 className="card-title">Offer Letter</h5>
                                <p className="card-text">06/07/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {active?.paris && (
                <div className='tabcontent d-flex flex-column'>
                    <h4>Employee</h4>
                    <div id="London" className="d-flex flex-row flex-wrap">
                        <div className='col-md-5 col-sm-6'>
                            <div className='p-3'>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Date Of Joining</label></div>
                                    <div className="col-md-6"><label>15/07/2024</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Contact No</label></div>
                                    <div className="col-md-6"><label>6260335083</label></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label>Email</label></div>
                                    <div className="col-md-6"><label>mohit@gmail.com</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first d-flex flex-row">
                        <div className="w-75">
                            <p>1 September 2023</p>
                        </div>
                        <div className="w-25">
                            <InputFeild classname={'inputSize200'} text={'date'} />
                        </div>
                    </div>
                    <div className="first d-flex flex-row" style={{overflowX:'scroll'}}>
                        <table className="table">
                            <thead>
                                <tr>

                                    <th scope="col">Eid</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Basic Salary</th>
                                    <th scope="col">Adition</th>
                                    <th scope="col">Deductions</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
