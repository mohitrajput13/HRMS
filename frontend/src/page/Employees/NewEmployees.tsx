import React, { useEffect, useState } from "react";
import ButtonField from "../../components/ButtonField";
import Form from "../../components/Form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import AddEmployeeForm from "../../components/AddEmployeeFrom";

const Newemployee = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [allEmployees, setAllEmployees] = useState<any>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false); // Track mode
  const [employeeData, setEmployeeData] = useState<any>({
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
  console.log(isEditMode);
  
  const resetForm = () => {
    setEmployeeData({
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
  };

  const handleInputChange = (field: any) => (event: any) => {
    const { value } = event.target;
    setEmployeeData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    setEmployeeData((prevData: any) => ({
      ...prevData,
      profile: file,
    }));
  };

  const handleResumeChange = (event: any) => {
    const file = event.target.files[0];
    setEmployeeData((prevData: any) => ({
      ...prevData,
      resume: file,
    }));
  };

  const onSave = async () => {
    const url = isEditMode
      ? `http://192.168.1.27:8080/updateEmployee/${employeeData.eid}`
      : "http://192.168.1.27:8080/addEmployee";

    try {
      let formData = new FormData();
      for (const key in employeeData) {
        if (employeeData[key] !== null) formData.append(key, employeeData[key]);
      }

      if (!isEditMode) {
        await fetch(url, {
          method: "POST",
          body: formData,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then(() => fetchData())
          .catch((error) => console.error(error));
      } else {
        await fetch(url, {
          method: "PUT",
          body: formData,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then(() => fetchData())
          .catch((error) => console.error("Error updating employee:", error));
      }
    } catch (error) {
      console.error("Error saving data: ", error);
    }

    resetForm();
    setIsEditMode(false);
    setHidden(true); // Hide form after saving
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.27:8080/getAllEmployee");
      const result = await response.json();
      setAllEmployees(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const updateEmployee = (item: any) => {
    setIsEditMode(true);
    setEmployeeData(item);
  };

  const removeEmployee = async (eid: any) => {
    try {
      await axios.delete(`http://192.168.1.27:8080/removeEmployee/${eid}`);
      fetchData();
    } catch (error) {
      console.error("Error removing employee:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="emp-main p-5">
        <ButtonField
          onClick={() => {
            setHidden(!hidden);
            resetForm(); // Reset form when adding new
            setIsEditMode(false); // Set to add mode
          }}
          data_bs_target="#exampleModal"
          type="button"
          iconleftside={"+"}
          classname="btn btn-warning text-white"
          data_bs_toggle="modal"
          label="Add New"
        />
        <AddEmployeeForm
          heading={isEditMode ? "Update Employee" : "Add Employee"}
          employeeData={employeeData}
          handleInputChange={handleInputChange}
          handleProfileChange={handleProfileChange}
          handleResumeChange={handleResumeChange}
          onSave={onSave}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Eid</th>
              <th scope="col">Position</th>
              <th scope="col">Date Of Joining</th>
              <th scope="col">Email Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees.user &&
              allEmployees.user.map((item: any, index: any) => (
                <tr key={index}>
                  <th scope="row">
                    <img
                      src={item.profile}
                      style={{ width: "35px", borderRadius: "-50%" }}
                      alt="Profile"
                    />
                    {item.firstname}
                  </th>
                  <td>{item.eid}</td>
                  <td>{item.jobtitle}</td>
                  <td>{item.doj}</td>
                  <td>{item.email}</td>
                  <td className="align-content-center">
                    <div className="dropdown">
                      <button className="dropbtn btn btn-light">
                        <i className="fa fa-ellipsis-v"></i>
                      </button>
                      <div className="dropdown-content">
                        <a>
                          <button
                            className="btn-btn w-100"
                            data-bs-target="#exampleModal"
                            data-bs-toggle="modal"
                            type="button"
                            style={{ border: "none" }}
                            onClick={() => {
                              updateEmployee(item);
                              setHidden(false); // Show form on edit
                            }}
                          >
                            <i className="fa fa-edit"></i>Edit
                          </button>
                        </a>
                        <a>
                          <button
                            className="btn-btn w-100"
                            style={{ border: "none" }}
                            onClick={() => removeEmployee(item.eid)}
                          >
                            <i className="fa fa-trash-o"></i> Remove
                          </button>
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Newemployee;
