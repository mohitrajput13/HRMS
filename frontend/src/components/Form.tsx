import React from "react";
import imagePath from "../constants/imagePath";
import InputField from "./InputField";
import "./Form.css";
import ButtonField from "./ButtonField";


interface FormProps {
  printTitle?: {
    first: {
      heading: string;
      profile?: boolean;
      selection?: boolean;
      uploadItem?: boolean;
    }[];
  }[];
  updateData?:any;
  heading?: string;
  body?: {
    genralFeild?: any;
    contactFeild?:any;
    salaryFeild?:any;
  };
  handleInputChange?: (field: any) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleProfileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleResumeChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSave?: () => void;
}

const Form: React.FC<FormProps> = ({
  body,
  printTitle,
  heading,
  updateData,
  handleProfileChange,
  handleResumeChange,
  handleInputChange,
  onSave
}) => {
  console.log("from updata"+updateData);
  
  return (
    <div
      className="modal modal-xl"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {heading}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {printTitle && printTitle[0].first.map((item) => (
            <div className="modal-body d-flex flex-column" key={item.heading}>
              <div className="p-2">
                <h5 className="fontW500_blackbd">{item.heading}</h5>
                {item.profile && (
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
                      <label
                        htmlFor="imagePickerInput"
                        className="btn btn-warning text-white"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                )}

                <div className="d-flex flex-wrap p-2 gap-3">
                  {item.heading === "General Information" && body?.genralFeild?.map((field:any) => (
                    <InputField
                      key={field.id}
                      maindiv={field.maindiv}
                      classname={field.classname}
                      labelclass={field.labelclass}
                      label={field.label}
                      
                      onChange={handleInputChange ? handleInputChange(field.title!) : undefined}
                    />
                  ))}
                  {item.heading === "Contact Information" && body?.contactFeild?.map((field:any) => (
                    <InputField
                      key={field.id}
                      maindiv={field.maindiv}
                      classname={field.classname}
                      labelclass={field.labelclass}
                      label={field.label}
                      onChange={handleInputChange ? handleInputChange(field.title!) : undefined}
                    />
                  ))}
                  {item.heading === "Employee Information" && body?.salaryFeild?.map((field:any) => (
                    <InputField
                      key={field.id}
                      maindiv={field.maindiv}
                      classname={field.classname}
                      labelclass={field.labelclass}
                      label={field.label}
                      onChange={handleInputChange ? handleInputChange(field.title!) : undefined}
                    />
                  ))}
                  {item.selection && (
                    <div className="d-flex flex-column w-25">
                      <label className="fontW500_black" htmlFor="jobTitle">
                        Job Title
                      </label>
                      <select
                        className="inputSize200 ps-2"
                        id="jobTitle"
                        name="jobtitle"
                        form="jobTitleForm"
                        onChange={handleInputChange ? handleInputChange("jobtitle") : undefined}
                      >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  )}
                </div>
                {item.uploadItem && (
                  <div className="d-flex gap-4">
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
                
                )}
              </div>
            </div>
          ))}
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
              label="Save changes"
              data_bs_dismiss="modal"
              onClick={()=>{onSave&&onSave()}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
