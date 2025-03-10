import { Link } from "react-router-dom";
import React from 'react';
import { FaChevronDown } from "react-icons/fa";

function Navbarcompo() {
  return (
    <div className="navbar">
      <h1>Student Api</h1>
      <div className="links">
        <Link to="/AddStudent" className="nav_links">Student<FaChevronDown /></Link>
        <Link to="/LogInForm" className="nav_links">LogIn</Link>
      </div>
    </div>
  );
};

export default Navbarcompo;