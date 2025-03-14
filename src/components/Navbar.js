import { Link } from "react-router-dom";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function Navbarcompo() {
  return (
    <div className = "navbar">
      
      <h1>Student Api</h1>

      <div className="links">
        <Link to="/" className="nav_links">
          Student
          <AiFillCaretDown className="icon" />
        </Link>

        <div className ="dropdown-menu">
          <Link to ="/AllStudentTable" className="dropdown-link">
            All Students
          </Link>
          <Link to = "/AddStudent" className="dropdown-link">
            Add Student
          </Link>
        </div>

        <Link to = "/LogIn" className="nav_links">
          Log-In
        </Link>
        <Link to = "/LogInForm" className="nav_links">
          LogOut
        </Link>
      </div>
    </div>
  );
}

export default Navbarcompo;
