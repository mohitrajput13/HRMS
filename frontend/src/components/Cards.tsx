import React from 'react';
import "./card.css"
interface CardsProps {
  img?: string;
  heading?: string;
  paragraph?: string;
  label?: string;
}

const Cards = ({ img, heading, paragraph, label }: CardsProps) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-1 d-flex justify-content-center">
      <div className="card card-first d-flex justify-content-center" >
        {img && (
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
          />
        )}
        <div className="card-body">
          <h5 className="card-title text-warning">{heading}</h5>
          <p className="card-text">{paragraph}</p>
          {label && (
            <a href="#" className="text-decoration-none text-warning d-flex justify-content-end">
              {label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
