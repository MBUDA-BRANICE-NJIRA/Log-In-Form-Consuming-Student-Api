import { Link } from "react-router-dom";
import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";

function Navbarcompo() {
  return (
    <div className="navbar">
      <h1>Student Api</h1>
      <div className="links">
        <Link to="/AddStudent" className="nav_links">Student<AiFillCaretDown className="icon"/></Link>
        <Link to="/LogInForm" className="nav_links">LogIn</Link>
        <Link to="/LogInForm" className="nav_links">LogOut</Link>
      </div>
    </div>
  );
};

export default Navbarcompo;