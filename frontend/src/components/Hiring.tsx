import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './hiring.css'
import imagePath from "../constants/imagePath";
import colors from "../style/colors";
const Hiring = () => {
  const body = [
    {
      id: 1,
      heading: "Available Position",
      percentage:75,
      colors:"green",
      position: 24
    },
    {
      id: 2,
      percentage:90,
      heading: "Job Open",
      colors:"red",
      position: 10,
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
        <CircularProgressbar
                      value={item.percentage}
                      text={`${item.percentage}%`}
                      styles={buildStyles({
                        pathColor: `rgba(255, 0, 0, ${item.percentage / 100})`,
                        textColor: 'red',
                        trailColor: "#d6d6d6",
                      })}
                    />
            
        </div>
        </div>
     </div>)
    }
     
  </>);
};

export default Hiring;
