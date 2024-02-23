import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetAllPassengers = ({ isLoggedIn, handleLogout }) => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getAllPassenger`)
      .then((response) => response.json())
      .then((data) => setPassengers(data))
      .catch((error) => console.error("Error fetching passengers:", error));
  }, []);

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/admin_home">
            Admin Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link" to="/GetAllDriver">
                  Show Drivers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Show Transactions
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-text-success"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="btn btn-outline-primary" to="/logout">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    <div className="container">
      <h1 className="mt-5">All Passengers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Emergency Contact</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{passenger.fname}</td>
              <td>{passenger.lname}</td>
              <td>{passenger.contact}</td>
              <td>{passenger.email}</td>
              <td>{passenger.rating}</td>
              <td>{passenger.emergency_contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default GetAllPassengers;
