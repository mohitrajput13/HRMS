import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonField from '../../components/ButtonField';
import imagePath from '../../constants/imagePath';

const PettyCash = () => {

    return <>
        <div className="text-center p-5">
            <img className="rounded" style={{width:'40%'}} src={imagePath.petty} alt="..." />
        </div>
    </>
};

export default PettyCash;
