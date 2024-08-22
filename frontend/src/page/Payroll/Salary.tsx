import React, { useEffect, useState } from "react";
import ButtonField from "../../components/ButtonField";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import AddPayrollFrom from "../../components/AddPayrollFrom";
const Salary = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [allEmployees, setAllEmployees] = useState<any>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false); 
  const [employeeData, setEmployeeData] = useState<any>({
    eid: "",
    firstname: "",
    lastname: "",
    language: "",
    salary:"",
    annual:'',
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


  const resetForm = () => {
    setEmployeeData({
      eid: "",
      firstname: "",
      lastname: "",
      salary:'',
      annual:'',
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
  console.log("mode" + isEditMode);
  const onSave = async () => {
    const url = isEditMode
      ? `http://192.168.1.27:8080/updateEmployee/${employeeData.eid}`
      : "http://192.168.1.27:8080/addEmployee";
    try {
      let formData = new FormData();
      formData.append("eid", employeeData.eid);
      formData.append("firstname", employeeData.firstname);
      formData.append("lastname", employeeData.lastname);
      formData.append("phone", employeeData.phone);
      formData.append("jobtitle", employeeData.jobtitle);
      formData.append("department", employeeData.department);
      formData.append("email", employeeData.email);
      formData.append("language", employeeData.language);
      formData.append("address", employeeData.address);
      formData.append("dob", employeeData.dob);
      formData.append("doj", employeeData.doj);
      formData.append("salary",employeeData.salary);
      formData.append("annual",employeeData.annual);
      formData.append("profile", employeeData.profile);
      formData.append("resume", employeeData.resume);
      if (!isEditMode) {
        await fetch("http://192.168.1.27:8080/addEmployee", {
          method: "POST",
          body: formData,
          redirect: "follow",
        })
          .then((response) => {
            response.json();
            fetchData();
          })
          .catch((error) => console.error(error));
      }
      else {
        console.log("chal rhaa hai" + employeeData.eid);
        await fetch(`http://192.168.1.27:8080/updateEmployee/${employeeData.eid}`, {
          method: "PUT",
          body: formData,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Employee updated:", data);
            fetchData();
          })
          .catch((error) => console.error("Error updating employee:", error));

      }

    } catch (error) {
      console.error("Error saving data: ", error);
    }
    resetForm();
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
    setEmployeeData({
      eid: item.eid,
      firstname: item.firstname,
      lastname: item.lastname,
      language: item.language,
      email: item.email,
      address: item.address,
      phone: item.phone,
      dob: item.dob,
      doj: item.doj,
      department: item.department,
      jobtitle: item.jobtitle,
      profile: item.profile,
      resume: item.resume,
      salary:item.salary,
      annual:item.annual
    });
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
        <AddPayrollFrom
          heading={isEditMode ? "Update Employee" : "Add Employee"}
          employeeData={employeeData}
          handleInputChange={handleInputChange}
          handleProfileChange={handleProfileChange}
          handleResumeChange={handleResumeChange}
          onSave={onSave} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Eid</th>
              <th scope="col">Position</th>
              <th scope="col">Date Of Joining</th>
              <th scope="col">Salary</th>
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
                  <td>{item.salary}</td>
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
                              setHidden(hidden ? false : true);
                              updateEmployee(item);
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

export default Salary;
