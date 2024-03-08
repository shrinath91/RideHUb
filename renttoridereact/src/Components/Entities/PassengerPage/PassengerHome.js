import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PassengerHome = ({ isLoggedIn, handleLogout }) => {
  const[rides,setRide] = useState([]);
  useEffect(()=>{
    fetch("https://localhost:7167/api/Ride/getActiveRide")
    .then(obj => obj.json())
    .then(data => setRide(data));
  },[])
  
  return (
    <div>
      {/* Navigation Bar */}
      {/* <div>{JSON.stringify(rides)}</div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand" >Passenger Home</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/searchRides">SearchRides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/passenger_home">ViewRides</Link>
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
      <div>
        <table className='table table-striped'>
          <tbody>
          <tr>
            <td>Ride Id</td>
            <td>Driver Id</td>
            <td>Start Location</td>
            <td>End Location</td>
            <td>Ride Time</td>
            <td>Fare</td>
            <td>Current Capacity</td>
            <td>Total Capacity</td>
            <td>Ride Status</td>
          </tr>
        {
          rides.map((ri)=>{
            return (
            <tr>
              <td>{ri.rideId}</td>
              <td>{ri.rideDriverId}</td>
              <td>{ri.startLocation}</td>
              <td>{ri.endLocation}</td>
              <td>{ri.rideTime}</td>
              <td>{ri.fare}</td>
              <td>{ri.currentCapacity}</td>
              <td>{ri.totalCapacity}</td>
              <td>{ri.rideStatus}</td>
            </tr>
            )
          })
        }
        </tbody>
        </table>
      </div>
      </div>
    
  );
};

export default PassengerHome;
