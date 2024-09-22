import React from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'; // Import icons
import './AuthForm.css';
import LoginImage from './LoginImage.jpeg';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={LoginImage} alt="Background" />
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
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

export default Login;
