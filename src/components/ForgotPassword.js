import React from 'react';
import './AuthForm.css';
import LoginImage from "./LoginImage.jpeg"
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'; 
const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={LoginImage} alt="Background" />
      </div>
      <div className="form-container">
        <h1>Forgot your password?</h1>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
          <div className="social-login">
          <div className="social-login">
            <button className="social-button google">
              <FaGoogle size={20} /> Google
            </button>
            <button className="social-button apple">
              <FaApple size={20} /> Apple
            </button>
            <button className="social-button facebook">
              <FaFacebook size={20} /> Facebook
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
