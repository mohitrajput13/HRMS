import React, { useEffect, useState } from "react";
import ButtonField from "../../components/ButtonField";
import Form from "../../components/Form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { log } from "console";
import AddEmployeeForm from "../../components/AddEmployeeFrom";
// const printTitle = [
//   {
//     first: [
//       {
//         id: 1,
//         profile: true,
//         uploadItem: false,
//         selection: false,
//         heading: "General Information",
//       },
//       {
//         id: 2,
//         profile: false,
//         selection: false,
//         heading: "Contact Information",
//         uploadItem: false,
//       },
//       {
//         id: 3,
//         selection: true,
//         profile: false,
//         uploadItem: true,
//         heading: "Employee Information",
//       },
//     ],
//   },
// ];

// const body = [
//   {
//     genralFeild: [
//       {
//         id: 1,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Employee Id",
//         title: "eid",
//       },
//       {
//         id: 2,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "First Name",
//         title: "firstname",
//       },
//       {
//         id: 3,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Last Name",
//         title: "lastname",
//       },
//       {
//         id: 4,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Date Of Birth",
//         title: "dob",
//       },
//       {
//         id: 5,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Language",
//         title: "language",
//       },
//       {
//         id: 6,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Email",
//         title: "email",
//       },
//     ],
//     contactFeild: [
//       {
//         id: 1,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Address",
//         title: "address",
//       },
//       {
//         id: 2,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Phone",
//         title: "phone",
//       },
//     ],
//     salaryFeild: [
//       {
//         id: 1,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Date Of Joining",
//         title: "doj",
//       },
//       {
//         id: 2,
//         maindiv: "maindiv",
//         classname: "inputSize200",
//         labelclass: "fontW500_black",
//         label: "Department",
//         title: "department",
//       },
//     ],
//   },
// ];
const Newemployee = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [allEmployees, setAllEmployees] = useState<any>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false); // New state to track mode
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
  console.log("mode" + isEditMode);
  const onSave = async () => {
    const url = isEditMode
      ? `http://localhost:8080/updateEmployee/${employeeData.eid}`
      : "http://localhost:8080/addEmployee";
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
      formData.append("profile", employeeData.profile);
      formData.append("resume", employeeData.resume);
      if (!isEditMode) {
        await fetch("http://localhost:8080/addEmployee", {
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
        console.log("chal rhaa hai"+employeeData.eid);
        await fetch(`http://localhost:8080/updateEmployee/${employeeData.eid}`, {
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
      const response = await fetch("http://localhost:8080/getAllEmployee");
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
      resume: item.resume
    });
  };

  const removeEmployee = async (eid: any) => {
    try {
      await axios.delete(`http://localhost:8080/removeEmployee/${eid}`);
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
          onClick={async () => {
            setHidden(hidden ? false : true);
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
          onSave={onSave} />
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
                            className="btn-btn"
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
                            className="btn-btn"
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

