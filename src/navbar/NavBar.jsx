import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/List" className="nav-link">
          List
        </NavLink>
        <NavLink to="/Table" className="nav-link">
          Table
        </NavLink>
        <NavLink to="/Product" className="nav-link">
          Product
        </NavLink>
      </div>
    </nav>
  );
}
