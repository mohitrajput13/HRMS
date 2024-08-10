import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import './hiring.css'
import imagePath from "../constants/imagePath";
const Hiring = () => {
  const body = [
    {
      id: 1,
      heading: "Available Position",
      position: 24
    },
    {
      id: 2,
      heading: "Job Open",
      position: 10
    }
  ];
  return (<>
    {body.map((item)=><div  className="hiring  card   ">
      <div  className="card-body d-flex d-row">
        <div className="w-75">
        <h6>{item.heading}</h6>
        <h3>{item.position}</h3>
        </div>
        <div className="h-25 w-25">
            <CircularProgressbar value={66} />
            
        </div>
        </div>
     </div>)
    }
     
  </>);
};

export default Hiring;
