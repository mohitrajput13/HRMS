import React, { useState } from 'react';
import Cards from '../../components/Cards';
import imagePath from '../../constants/imagePath';



const JobDescription = () => {
  const body = [
    {
      id: 1,
      img: `${imagePath.uiuximg}`,
      heading: "UI/UX Designer ",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    },
    {
      id: 2,
      img: `${imagePath.reactimg}`,
      heading: "React Native Developer",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    },
    {
      id: 3,
      img: `${imagePath.nodeimg}`,
      heading: "Node Developer ",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    },
    {
      id: 4,
      img: `${imagePath.wordpressimg}`,
      heading: "WordPress Developer ",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    },
    {
      id: 5,
      img: `${imagePath.phpimg}`,
      heading: "PHP Developer ",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    },
    {
      id: 6,
      img: `${imagePath.drupalimg}`,
      heading: "Drupal Developer ",
      paragraph: 'Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.......',
      label: 'View More'
    }
  ]; 
    return (
      <>
         <div className='row p-5' style={{gap:'20px'}}>
             { body.map((item:any)=><Cards img={item.img} heading={item.heading} paragraph={item.paragraph} label={item.label}/>)}
        </div> 
      </>
    );

};

export default JobDescription;
