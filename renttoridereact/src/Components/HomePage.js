import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            RideHub
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-text-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="btn btn-outline-primary" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h1>Welcome to RideHub</h1>
        <h6>Find your ride, book, and enjoy!</h6>
      </div>
      <div className="col-md-6">
        <img
          src="https://via.placeholder.com/400"
          alt="RideHub Image"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomePage;
