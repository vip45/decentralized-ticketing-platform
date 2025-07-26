import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Even<span>t</span>ickets
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/events">
              Events
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-tickets">
                My Tickets
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav ms-auto">
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button
                className="btn btn-outline-light"
                onClick={() => setLoggedIn(false)}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
