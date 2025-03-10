import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {

  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`Wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <remember-forgot>
              <input type="checkbox" />
              Remember me
            </remember-forgot>
            <a href="n#">Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="n#" onClick={registerLink}>
                Register
              </a>{" "}
            </p>
          </div>
          
        </form>
      </div>

      {/* /* REGISTER SECTION */}

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

          <div className = "remember-forgot">
            <label>
              <input type = "checkbox" />I agree to the terms & conditions.
            </label>
          </div>

          <button type = " submit">Register</button>

          <div className = "register-link">
            <p>
              Already have an account?{" "}
              <a href = "n#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
