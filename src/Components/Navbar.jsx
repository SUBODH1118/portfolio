import React from "react";
import "../Components/Web.css";
import logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
