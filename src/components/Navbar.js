import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
        <div className="navbar">
            
            <h1>Student Api</h1>

            <div className="links">
              <Link to="/" class = "nav_links">Student</Link>
              <Link to="/" class = "nav_links">LogIn</Link>
            </div>
        </div>
  );
};

export default Navbar



