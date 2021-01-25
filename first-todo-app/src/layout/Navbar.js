import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4 my-3 mx-3">
      <a href="/" className="navbar-brand">
        <i className="fas fa-check-circle"></i> {title}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav nav-item active">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"> Home </i>
          </Link>
        </li>
        <li className="nav nav-item active">
          <Link to="/addTodo" className="nav-link">
            <i className="fas fa-list-ul"> Add Todo </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;