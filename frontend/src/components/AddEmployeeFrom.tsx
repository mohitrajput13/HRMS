import React, { useState, useEffect } from "react";
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

const AddEmployeeForm: React.FC<FormProps> = ({
  heading,
  employeeData,
  handleProfileChange,
  handleResumeChange,
  handleInputChange,
  onSave
}) => {
  const [isValid, setIsValid] = useState(true);

  // Function to check form validity
  const validateForm = () => {
    const requiredFields = [
      employeeData?.eid,
      employeeData?.firstname,
      employeeData?.lastname,
      employeeData?.dob,
      employeeData?.language,
      employeeData?.email,
      employeeData?.address,
      employeeData?.phone,
      employeeData?.doj,
      employeeData?.jobtitle,
      employeeData?.department
    ];
    
    // Check if any required field is missing
    const allFieldsFilled = requiredFields.every(field => field && field.trim() !== '');
    setIsValid(allFieldsFilled);
  };

  useEffect(() => {
    // Validate the form whenever employeeData changes
    validateForm();
  }, [employeeData]);

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
                <img src={imagePath.profile} alt="Profile" />
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <input
                    type="file"
                    accept=".png, .jpg, .svg .jpeg"
                    onChange={handleProfileChange}
                    style={{ display: "none" }}
                    id="imagePickerInput"
                  />
                  <label htmlFor="imagePickerInput" className="btn btn-warning text-white">Upload</label>
                </div>
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
                  value={employeeData.firstname}
                  onChange={handleInputChange ? handleInputChange("firstname") : undefined}
                />
                <InputField
                  text={"text"}
                  labelclass="fontW500_black"
                  classname="inputSize200"
                  label="Last Name"
                  value={employeeData.lastname}
                  onChange={handleInputChange ? handleInputChange("lastname") : undefined}
                />
                <InputField
                  text={"date"}
                  labelclass="fontW500_black"
                  classname="inputSize200"
                  label="Date of Birth"
                  value={employeeData.dob}
                  onChange={handleInputChange ? handleInputChange("dob") : undefined}
                />
                <div className="d-flex flex-column w-25">
                  <label className="fontW500_black" htmlFor="language">
                    Language
                  </label>
                  <select
                    className="inputSize200 fontW500_black ps-2"
                    id="language"
                    name="language"
                    form="languageForm"
                    value={employeeData.language}
                    onChange={handleInputChange ? handleInputChange("language") : undefined}
                  >
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Punjabi">Punjabi</option>
                  </select>
                </div>
                <InputField
                  text={"text"}
                  labelclass="fontW500_black"
                  classname="inputSize200"
                  label="Email"
                  value={employeeData.email}
                  onChange={handleInputChange ? handleInputChange("email") : undefined}
                />
              </div>
            </div>
            <h5 className="fontW500_blackbd">Contact Information</h5>
            <div className="d-flex flex-wrap p-2 gap-3">
              <InputField
                text={"text"}
                labelclass="fontW500_black"
                classname="inputSize200"
                label="Address"
                value={employeeData.address}
                onChange={handleInputChange ? handleInputChange("address") : undefined}
              />
              <InputField
                text={"text"}
                labelclass="fontW500_black"
                classname="inputSize200"
                label="Phone"
                value={employeeData.phone}
                onChange={handleInputChange ? handleInputChange("phone") : undefined}
              />
            </div>
            <h5 className="fontW500_blackbd">Employee Information</h5>
            <div className="d-flex flex-wrap p-2 gap-3">
              <InputField
                text={"date"}
                labelclass="fontW500_black"
                classname="inputSize200"
                label="Date Of Joining"
                value={employeeData.doj}
                onChange={handleInputChange ? handleInputChange("doj") : undefined}
              />
              <div className="d-flex flex-column w-25">
                <label className="fontW500_black" htmlFor="jobTitle">Job Title</label>
                <select
                  className="inputSize200 fontW500_black ps-2"
                  id="jobTitle"
                  name="jobtitle"
                  form="jobTitleForm"
                  value={employeeData.jobtitle}
                  onChange={handleInputChange ? handleInputChange("jobtitle") : undefined}
                >
                  <option value="UI?UX Designer">UI/UX Designer</option>
                  <option value="React Native Developer">React Native Developer</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                </select>
              </div>
              <InputField
                text={"text"}
                labelclass="fontW500_black"
                classname="inputSize200"
                label="Department"
                value={employeeData.department}
                onChange={handleInputChange ? handleInputChange("department") : undefined}
              />
            </div>
            <div className="d-flex py-3 gap-5">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <input
                  type="file"
                  accept=".pdf, .docx, .doc"
                  onChange={handleResumeChange}
                  style={{ display: "none" }}
                  id="resumePickerInput"
                />
                <label
                  htmlFor="resumePickerInput"
                  className="btn btn-warning text-white"
                >
                  Upload Resume
                </label>
              </div>
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
              label={`${heading === 'Add Employee' ? 'Save changes' : 'Update'}`}
              data_bs_dismiss="modal"
              onClick={onSave}
              disabled={!isValid} // Disable the button if form is not valid
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
