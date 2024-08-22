import React, { useState } from "react";
import imagePath from "../constants/imagePath";
import InputField from "./InputField";
import "./Form.css";
import ButtonField from "./ButtonField";
interface FormProps {
    employeeData?: any;
    heading?: any;
    handleInputChange?: (field: any) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleProfileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResumeChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSave?: () => void;
}
const AddPayrollFrom: React.FC<FormProps> = ({
    heading,
    employeeData,
    handleProfileChange,
    handleResumeChange,
    handleInputChange,
    onSave
}) => {

    return (
        <div className="modal modal-xl" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{heading}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-column">
                        <div className="p-2">
                            <h5 className="fontW500_blackbd">General Information</h5>
                            <div className="d-flex gap-4">
                                <img src={employeeData.profile} style={{width:'50px'}} alt="Profile" />
                            </div>
                            <div className="d-flex flex-wrap p-2 gap-3">
                                <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Employee Id"
                                    readOnly={heading === 'Update Employee' ? true : false}
                                    value={employeeData.eid}
                                    onChange={handleInputChange ? handleInputChange("eid") : undefined}
                                />
                                <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="First Name"
                                    readOnly={heading === 'Update Employee' ? true : false}
                                    value={employeeData.firstname}
                                    onChange={handleInputChange ? handleInputChange("firstname") : undefined}
                                />
                                <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Last Name"
                                    readOnly={heading === 'Update Employee' ? true : false}
                                    value={employeeData.lastname}
                                    onChange={handleInputChange ? handleInputChange("lastname") : undefined}
                                />
                            </div>
                        </div>
                        <h5 className="fontW500_blackbd">Enployee Information</h5>
                        <div className="d-flex flex-wrap p-2 gap-3">
                            <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Job Title"
                                    readOnly={heading === 'Update Employee' ? true : false}
                                    value={employeeData.jobtitle}
                                    onChange={handleInputChange ? handleInputChange("jobtitle") : undefined}
                                />
                            <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Contact"
                                    readOnly={heading === 'Update Employee' ? true : false}
                                    value={employeeData.phone}
                                    onChange={handleInputChange ? handleInputChange("phone") : undefined}
                            />
                        </div>
                        <h5 className="fontW500_blackbd">Salary Information</h5>
                        <div className="d-flex flex-wrap p-2 gap-3">
                        <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Salary"
                                    value={employeeData.salary}
                                    onChange={handleInputChange ? handleInputChange("salary") : undefined}
                                />

                            <InputField
                                    text={"text"}
                                    labelclass="fontW500_black"
                                    classname="inputSize200"
                                    label="Annual Pay"
                                    value={employeeData.annual}
                                    onChange={handleInputChange ? handleInputChange("annual") : undefined}
                                />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <ButtonField
                            type="button"
                            classname="btn text-white btn-warning"
                            label={`${heading === 'Add Employee' ? 'Save changes' : 'Save'}`}
                            data_bs_dismiss="modal"
                            onClick={onSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPayrollFrom;
