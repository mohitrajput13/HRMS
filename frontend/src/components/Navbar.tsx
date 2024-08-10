import React, { useState } from 'react';
import imagePath from '../constants/imagePath';
import colors from '../style/colors';
import ButtonField from './ButtonField';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid" >
                <a className="navbar-brand" href="#"><img src={imagePath.logo} style={{width:'100%', height:'35px'}}></img></a>
                <ButtonField classname="navbar-toggler d-block d-lg-block buttonSize136_yellow" type='button' label='Login' onClick={()=>{navigate('/signin')}}/>
            </div>
        </nav>
      </>
    );

};

export default Navbar;
