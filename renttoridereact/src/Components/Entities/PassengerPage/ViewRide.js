import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ViewRides = ({ isLoggedIn, handleLogout }) => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllRides")
      .then((response) => response.json())
      .then((data) => setRides(data))
      .catch((error) => console.error("Error fetching rides:", error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
          <Link className="navbar-brand" to="/passenger_home">
            Passenger Home
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
                <Link className="nav-link active" aria-current="page" to="/searchRide">Search Rides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oldRides">OldRides</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </nav>
      <div className="container">
        <h1 className="mt-5"></h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Start Location</th>
              <th>End Location</th>
              <th>Ride Time</th>
              <th>Fare</th>
              <th>Total Capacity</th>
              <th>Current Capacity</th>
              <th>Ride Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.start_location}</td>
                <td>{ride.end_location}</td>
                <td>{ride.ride_time}</td>
                <td>{ride.fare}</td>
                <td>{ride.total_capacity}</td>
                <td>{ride.current_capacity}</td>
                <td>{ride.ride_status}</td>
                <td>
                  <Link to={`/bookRide/${ride.id}`} className="btn btn-primary">Book Ride</Link>
                  {/* <Link to={`/viewRide/${ride.id}`} className="btn btn-info">View Ride</Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRides;
