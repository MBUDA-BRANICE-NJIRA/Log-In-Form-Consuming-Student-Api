import React, { useState } from "react";

import { FaUser, FaLock } from "react-icons/fa";

const LoginRegister = () => {

  const [action] = useState('');

  // const registerLink = () => {
  //   setAction("active");
  // };
 
  return (
    <div className = {`Wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>

          <div className = "input-box">
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
              Don't have an account?
              <a href="/register">
                Register
              </a>
            </p>
          </div>
          
        </form>
      </div>

     
    </div>
  );
};

export default LoginRegister;
