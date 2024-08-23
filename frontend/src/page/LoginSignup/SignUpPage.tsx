import React, { useState } from 'react';
import imagePath from '../../constants/imagePath';
import InputField from '../../components/InputField';
import ButtonField from '../../components/ButtonField';
import colors from '../../style/colors';
import './loginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirm: ''
    };

    if (name === null || name === undefined || name.trim() === '') {
      newErrors.name = "Name is required";
    }
    if (email === null || email === undefined || email.trim() === '') {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (password === null || password === undefined || password.trim() === '') {
      newErrors.password = "Password is required";
    }
    if (password !== confirm) {
      newErrors.confirm = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    const validationErrors = validateForm();
    
    // Check if there are any validation errors
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }
    
    // If no errors, clear the errors state
    setErrors({
      name: '',
      email: '',
      password: '',
      confirm: ''
    });

    try {
      const response = await axios.post('http://192.168.1.27:8080/signup', { name, email, password });
      toast.success("Signup Successful");
      setTimeout(() => {
        navigate("/maincomponent");
      }, 2000);
    } catch (error) {
      toast.error("Signup Failed");
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmitForm}>
        <div className="main-container">
          <div className='left-container center'>
            <img className='abstract' src={imagePath.abstract} alt="Abstract" />
          </div>
          <div className='right-container'>
            <div className='right-container-first center'>
              <img className='logo' src={imagePath.logo} alt="Logo" />
            </div>
            <div className='right-container-second'>
              <div className='login-form'>
                <h4 className='fontS27' style={{ color: colors.yellow }}>Sign Up</h4>
                <InputField
                  classname='inputSize364'
                  labelclass='fontW500_black'
                  label='Full Name'
                  placeholder='Enter Full Name'
                  value={name}
                  onChange={(e) => {
                     setName(e.target.value) }}
                />
                {errors.name && <label className='text-danger'>{errors.name}</label>}
                <InputField
                  classname='inputSize364'
                  labelclass='fontW500_black'
                  label='Email Address'
                  placeholder='Enter Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <label className='text-danger'>{errors.email}</label>}
                <InputField
                  text='password'
                  classname='inputSize364'
                  labelclass='fontW500_black'
                  label='Password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <label className='text-danger'>{errors.password}</label>}
                <InputField
                  text='password'
                  classname='inputSize364'
                  labelclass='fontW500_black'
                  label='Confirm Password'
                  placeholder='Enter Password Again'
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                {errors.confirm && <label className='text-danger'>{errors.confirm}</label>}
                <ButtonField type='submit' classname='buttonSize364_yellow' label='Sign Up' />
                <span
                  className="d-block text-center ps-3 fontW400_black"
                >
                  have an account?{" "}
                  <a
                    className="text-decoration-none fontS14"
                    style={{ color: colors.yellow }}
                    onClick={() => navigate("/signin")}
                  >
                    Log in
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

export default SignUpPage;
