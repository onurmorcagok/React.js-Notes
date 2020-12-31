import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 mp-3">
      <a href="/" className="navbar-brand">
        {title}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/addUser" className="nav-link">
            Add User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
