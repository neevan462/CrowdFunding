import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>CrowdFund</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/campaigns">Campaigns</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button className="navbar-button">
        <Link to="/start-campaign">Start a Campaign</Link>
      </button>
    </nav>
  );
};

export default Navigation;
