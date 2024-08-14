import axios from 'axios';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordForm = () => {
  const [hiddenForgetFrom, setHiddenForgetFrom] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const handleOtpSubmit = async (event: any) => {
    event.preventDefault();
    try {
      console.log(email);

      const response = await axios.post('http://localhost:8080/otp', { email, otp });
      console.log(response.data.result);
      { response.data.result && navigate("/signin") }
    } catch (error) {
      console.log(error);
    }
  };


  const handleEmailSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(email);
      setHiddenForgetFrom(false);
      const response = await axios.post('http://localhost:8080/mail', { email });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  const handleBack = () => {
    navigate(-1);
  };

  return (<>
    {hiddenForgetFrom && <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Forgot Password</h3>
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleBack}>Back</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>}
    {!hiddenForgetFrom && <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h4>Enter OTP</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">OTP</label>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
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
