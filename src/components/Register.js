import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Registercompo = () => {
  return (
    <div className="Wrapper">
      <div className="form-box register">
        <form action="#">
          <h1>Registration</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Create Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions.
            </label>
          </div>

          <button type=" submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registercompo;
