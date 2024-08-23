import React, { useEffect, useState } from "react";
import ButtonField from "../../components/ButtonField";
import AddOldEmployeeForm from "../../components/AddOldEmployeeFrom";
import axios from "axios";


const OldEmployees = () => {
  const [hidden, setHidden] = useState(true);
  const [allEmployees, setAllEmployees] = useState<any>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [employeeData, setEmployeeData] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dor: "",
    jobtitle: "",
    profile: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
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
  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.27:8080/getAllOldEmployee");
      const result = await response.json();
      setAllEmployees(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const removeEmployee = async (eid: any) => {
    try {
     // console.log(eid);
      await axios.delete(`http://192.168.1.27:8080/removeOldEmployee/${eid}`);
      fetchData();
    } catch (error) {
      console.error("Error removing employee:", error);
    }
  };
  const updateEmployee = (item: any) => {
    setIsEditMode(true);
    setEmployeeData({
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      dor: item.dor,
      jobtitle: item.jobtitle,
      profile: item.profile,
    });
  };
  const onSave = async () => {
    try {
      let formData = new FormData();
      formData.append("firstname", employeeData.firstname);
      formData.append("lastname", employeeData.lastname);
      formData.append("phone", employeeData.phone);
      formData.append("jobtitle", employeeData.jobtitle);
      formData.append("email", employeeData.email);
      formData.append("dor", employeeData.dor);
      formData.append("profile", employeeData.profile);
      if (!isEditMode) {
        await fetch("http://192.168.1.27:8080/addOldEmployee", {
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
        console.log("chal rhaa hai"+employeeData.email);
        await fetch(`http://192.168.1.27:8080/updateOldEmployee/${employeeData.email}`, {
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
    // resetForm();
  };

  return (
    <>
      <div className="emp-main p-5">
        <ButtonField
          onClick={() => {
            setHidden(hidden ? false : true);
          }}
          data_bs_target="#exampleModal"
          type="button"
          iconleftside={"+"}
          classname="btn btn-warning text-white"
          data_bs_toggle="modal"
          label="Add New"
        />
       <AddOldEmployeeForm
          heading={isEditMode ? "Update Employee" : "Add Old Employee"}
          employeeData={employeeData}
          handleInputChange={handleInputChange}
          handleProfileChange={handleProfileChange}
          onSave={onSave} />
           <div style={{overflowX:'scroll'}}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ minWidth: "140px" }} scope="col">Name</th>
              <th style={{ minWidth: "140px" }}scope="col">Position</th>
              <th style={{ minWidth: "140px" }} scope="col">Email Id</th>
              <th style={{ minWidth: "140px" }} scope="col">Contact</th>
              <th style={{ minWidth: "140px" }} scope="col">Date Of Resign</th>
              <th style={{ minWidth: "140px" }} scope="col">Action</th>
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
                  <td style={{ minWidth: "140px" }}>{item.jobtitle}</td>
                  <td style={{ minWidth: "140px" }}>{item.email}</td>
                  <td style={{ minWidth: "140px" }}>{item.phone}</td>
                  <td style={{ minWidth: "140px" }}>{item.dor}</td>
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
                            onClick={() => removeEmployee(item._id)}
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
      </div>
    </>
  );
};

export default OldEmployees;
