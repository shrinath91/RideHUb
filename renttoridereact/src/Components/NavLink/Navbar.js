import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {

  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          RideHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleAboutUsClick}>
                AboutUs
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/driver_register">
                RegisterDriver
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/passenger_registration">
                RegisterPassenger
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}
