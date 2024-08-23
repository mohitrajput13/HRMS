import axios from 'axios';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import ButtonField from '../../components/ButtonField';
import { toast, ToastContainer } from 'react-toastify';
interface FormState {
  forget: boolean;
  otp: boolean;
  reset: boolean;
}

const ForgotPasswordForm = () => {
  const [hiddenForgetFrom, setHiddenForgetFrom] = useState<FormState>({
    forget: true,
    otp: false,
    reset: false
  });
  console.log(hiddenForgetFrom);

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const navigate = useNavigate();
  const handleOtpSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.27:8080/otp', { email, otp });
      console.log(response.data.result);
      if (response.data.result) {
        toast.success("Successful Match Otp");
        setHiddenForgetFrom({ forget: false, otp: false, reset: true });
      }
    } catch (error) {
      toast.error("Please Enter Correct Email ");
    }
  };

  const handlePasswordSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (password === confirm) {
        const response = await axios.post('http://192.168.1.27:8080/resetpassword', { email, password });
        console.log(response.data.result);
        if (response.data.result) {
          toast.success("Successful Reset Password");
          setHiddenForgetFrom({ forget: false, otp: false, reset: true });
          navigate("/signin")
        }
      }
      else {
        toast.error("password doesn't match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(email);
      const user = await axios.post('http://192.168.1.27:8080/searchByEmail', { email });
      if (user.data.message === "User Is Exists") {
        const response = await axios.post('http://192.168.1.27:8080/mail', { email });
        if (response.data.result) {
          toast.success("Successful Send Otp");
          setHiddenForgetFrom({ forget: false, otp: true, reset: false });
        }
        console.log(response.data);
      }
    } catch (error) {
      toast.error("Please Enter Correct Email");      
      console.log(error);
    }

  };

  const handleBack = () => {

    navigate(-1);
  };

  return (<>
    <ToastContainer />
    {hiddenForgetFrom.forget && <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-warning text-center">Forgot Password</h3>
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-3">
                  <InputField
                    classname="inputSize364 form-control"
                    labelclass="fontW500_black"
                    label="Email Address"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
                <ButtonField type='submit' classname='buttonSize136_yellow' label='Submit' />
                <button type="button" className="btn btn-secondary ms-2" onClick={handleBack}>Back</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>}
    {hiddenForgetFrom.otp && <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              <h4 className='card-title text-warning text-center'>Enter OTP</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label text-center ">OTP</label>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} className='border rounded' style={{ width: '8%' }} />}
                  />
                </div>
                <ButtonField type='submit' classname='buttonSize364_yellow' label='Submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>}
    {hiddenForgetFrom.reset && <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              <h4 className='card-title text-warning text-center'>Reset Password</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <InputField
                    text='password'
                    classname='inputSize364'
                    labelclass='fontW500_black'
                    label='Password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputField
                    text='password'
                    classname='inputSize364'
                    labelclass='fontW400_black'
                    label='Confirm Password'
                    placeholder='Enter Password Again'
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                </div>
                <ButtonField type='submit' classname='buttonSize364_yellow' label='Submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>}
  </>

  );
};

export default ForgotPasswordForm;
