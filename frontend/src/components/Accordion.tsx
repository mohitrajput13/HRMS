import React, { useState } from "react";
import imagePath from "../constants/imagePath";
import "./accordion.css";
import { useNavigate } from "react-router-dom";
import ButtonField from "./ButtonField";

interface AccordionProps {
    data?: any;
}

const Accordion = ({ data }: AccordionProps) => {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            {data && (
                <div className="accordion w-100" id="accordionExample">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Technology</td>
                                <td>Contact</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.user &&
                                data.user.map((item: any, index: any) => (
                                    <React.Fragment key={index}>
                                        <tr
                                            className={`bg-table ${openIndex === index ? "open" : ""
                                                }`}
                                            onClick={() => handleClick(index)}
                                        >
                                            <td>
                                                <i
                                                    className={`bx ${openIndex === index
                                                        ? "bxs-chevron-down"
                                                        : "bxs-chevron-right"
                                                        } arrow`}
                                                />
                                            </td>
                                            <td>{item.firstname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.jobtitle}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <i className="fa fa-ellipsis-v"></i>
                                            </td>
                                        </tr>
                                        {openIndex === index && (
                                            <tr className="accordion-collapse">
                                                <td colSpan={6}>
                                                    <div className="accordion-body">
                                                        <div className="accordion-profile d-flex gap-5 justify-content-center align-items-center flex-row">
                                                            <div className="profile-image d-flex flex-column w-25 justify-content-center align-items-center">
                                                                <img
                                                                    className="profile-img "
                                                                    style={{ width: "50%" }}
                                                                    src={item.profile}
                                                                    alt="Profile"
                                                                />
                                                                <div className="d-flex flex-column justify-content-center align-items-center p-2">
                                                                    <div className="label">{item.name}</div>
                                                                    <div className="value">{item.jobtitle}</div>
                                                                </div>
                                                            </div>
                                                            <div className="profile-detail w-75">
                                                                <div className="gap-3">
                                                                    <div className="d-flex gap-3 flex-row  mt-3">
                                                                        <div className="label">Email Id</div>
                                                                        <div className="value">{item.email}</div>
                                                                    </div>
                                                                    <div className="d-flex gap-3 flex-row  mt-3">
                                                                        <div className="label">Language</div>
                                                                        <div className="value">{item.language}</div>
                                                                    </div>
                                                                    <div className="d-flex gap-3 flex-row mt-3">
                                                                        <div className="label">Date Of Birth</div>
                                                                        <div className="value">{item.dob}</div>
                                                                    </div>
                                                                    <div className="d-flex gap-3 flex-row  mt-3">
                                                                        <div className="label">Date Of Joining</div>
                                                                        <div className="value">{item.doj}</div>
                                                                    </div>
                                                                    <div className="d-flex gap-3 flex-row  mt-3">
                                                                        <div className="label">Department</div>
                                                                        <div className="value">{item.department}</div>
                                                                    </div>
                                                                    <div className="d-flex gap-3 flex-row justify-content-end mt-3">
                                                                        <ButtonField
                                                                            classname="navbar-toggler d-block d-lg-block buttonSize136_yellow fa-sharp fa-light fa-arrow-down-to-line"
                                                                            fafaiconleft="true"
                                                                            type="button"
                                                                            label="Full Resume"
                                                                            onClick={() => {
                                                                                const resumeUrl = `${item.resume}`;
                                                                                const link = document.createElement("a");
                                                                                link.href = resumeUrl;
                                                                                link.download = "Resume.pdf"; // Specify the default filename for the download
                                                                                document.body.appendChild(link); // Append to the body
                                                                                link.click(); 
                                    
                                                                              }}


                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Accordion;
