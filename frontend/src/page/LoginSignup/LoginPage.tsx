import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import colors from "../../style/colors";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  console.log(email +"     "+ password);
  console.log(errors);
  
  const navigate = useNavigate();

  // const validateForm = () => {
  //   const newErrors = {
  //     email:email,
  //     password:password
  //   };

  //   if (!email) newErrors.email = "Email is required";
  //   else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    
  //   if (!password) newErrors.password = "Password is required";

  //   return newErrors;
  // };

  const handleSubmitForm = async (e:any) => {
    e.preventDefault();
    console.log("afdsafds");
    
    // const validationErrors = validateForm();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    console.log("afdsafds");
    try {
      console.log("afdsafds");
      const response = await axios.post('http://192.168.1.27:8080/signin', { email, password });
      console.log("afdsafds");
      if(response)
      {
        dispatch(setCurrentUser(response.data.user));
        toast.success("Login Successful");
        navigate("/maincomponent");
      }
      
    } catch (error) {
      toast.error("Login Failed");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmitForm}>
        <div className="main-container">
          <div className="left-container center">
            <img className="abstract" src={imagePath.abstract} alt="Abstract" />
          </div>
          <div className="right-container center">
            <div className="right-container-first center">
              <img className="logo" src={imagePath.logo} alt="Logo" />
            </div>
            <div className="right-container-second">
              <div className="login-form">
                <h4 className="fontS27" style={{ color: colors.yellow }}>
                  Login
                </h4>
                <InputField
                  classname="inputSize364"
                  labelclass="fontW500_black"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                  }}
                />
                {errors.email && <label className="text-danger">{errors.email}</label>}
                <InputField
                  classname="inputSize364"
                  labelclass="fontW500_black"
                  label="Password"
                  placeholder="Enter Password"
                  text="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors(prevErrors => ({ ...prevErrors, password: '' }));
                  }}
                />
                {errors.password && <label className="text-danger">{errors.password}</label>}
                <span className="d-block">
                  <a
                    className="text-decoration-none fontW500_black"
                    style={{ color: colors.yellow }}
                    href="/forgetpassword"
                  >
                    Forgot password?
                  </a>
                </span>
                <ButtonField
                  type="submit"
                  classname="buttonSize364_yellow"
                  label="Log in"
                />
                <span
                  className="d-block ps-3 fontW400_black"
                >
                  Don’t have an account?{" "}
                  <a
                    className="text-decoration-none fontS14"
                    style={{ color: colors.yellow }}
                    href="#"
                    onClick={() => navigate("/signup")}
                  >
                    Create an account
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
