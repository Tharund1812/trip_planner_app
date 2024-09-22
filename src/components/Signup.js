import React from 'react';
import './AuthForm.css';
import LoginImage from "./LoginImage.jpeg"
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'; 

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={LoginImage} alt="Background" />
      </div>
      <div className="form-container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="form-options">
            <label>
              <input type="checkbox" />
              I accept the Terms of Service
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
