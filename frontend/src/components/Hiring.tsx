import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './hiring.css'
import imagePath from "../constants/imagePath";
import colors from "../style/colors";
interface HiringProps{
  body?:any
}
const Hiring = ({body}:HiringProps) => {
 
  return (<>
    {body.map((item:any)=><div  className="hiring  card   ">
      <div  className="card-body d-flex d-row">
        <div className="w-100">
        <h6>{item.heading}</h6>
        <h3>{item.position}</h3>
        </div>
        <div className="h-25 w-25">
        <CircularProgressbar
                      value={item.percentage}
                      text={`${item.percentage}%`}
                      styles={buildStyles({
                        pathColor: `${item.colors}`,
                        textColor: `${item.textColor}`,
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
