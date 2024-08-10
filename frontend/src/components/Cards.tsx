import React, { useState } from 'react';
import imagePath from '../constants/imagePath';
interface CardsProps{
    img ?: string;
    heading ?:string;
    paragraph ?:string;
    label ?: string;
}
const Cards = ({img,heading,paragraph,label}:CardsProps) => {
    
    return (
        <>
            <div className="card col-md-4 p-3" style={{width:'30%',maxHeight:'500px',alignItems:'center'}}>
                <img className="card-img-top" src={img} alt="Card image cap" style={{width:'213px',height:'152px'}}/>
                <div className="card-body">
                    <h5 className="card-title text-warning">{heading}</h5>
                    <p className="card-text">{paragraph}</p>
                    <a href="#" className="text-decoration-none text-warning d-flex justify-content-end">{label}</a>
                </div>
            </div>
        </>
    );

};

export default Cards;
