import React from "react";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <Link to="/">
          <i className="fa-solid fa-house"></i> Home
        </Link>
        <Link to="/search">
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </Link>
        <Link to="login">
          <i className="fa-solid fa-user"> </i>Login
        </Link>
        <Link to="notification">
          <i className="fa-solid fa-bell"></i> Notification
        </Link>
        <Link to="settings">
          <i className="fa-solid fa-gear"></i> Settings
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
