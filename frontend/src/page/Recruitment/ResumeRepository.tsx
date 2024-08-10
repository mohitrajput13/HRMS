import React, { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion';

const ResumeRepository: React.FC = () => {
    const [data, setEmployeeData] = useState<any>({
        eid: "",
        firstname: "",
        lastname: "",
        language: "",
        email: "",
        address: "",
        phone: "",
        dob: "",
        doj: "",
        department: "",
        jobtitle: "",
        profile: "",
        resume: "",
      });
      useEffect(() => {
        fetchData();
      }, []);
    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/getAllEmployee");
          const result = await response.json();
          console.log(result);
          
          setEmployeeData(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
    return (
        <div className='emp-main p-5'>
            <div className="d-flex flex-column">
                <Accordion data={data} />
            </div>
        </div>
    );
};

export default ResumeRepository;
