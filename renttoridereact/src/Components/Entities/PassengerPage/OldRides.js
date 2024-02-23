import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OldRides = ({ isLoggedIn, handleLogout }) => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get('/api/rides')
      .then(response => {
        setRides(response.data);
      })
      .catch(error => {
        console.error('Error fetching rides:', error);
      });
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
                <Link className="nav-link" to="/viewRides">ViewRides</Link>
              </li>
            </ul>
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
        </div>
      </nav>

      <div>
        <h2>Rides Completed by Passengers</h2>
        <ul>
          {rides.map((ride, index) => (
            <li key={index}>
              <h3>Ride</h3>
              <p>Passenger: {ride.passenger}</p>
              <p>Date: {ride.date}</p>
              <p>Distance: {ride.distance}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OldRides;
