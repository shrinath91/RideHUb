import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
const ViewRides = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getAllRides')
      .then((response) => response.json())
      .then((data) => setRides(data))
      .catch((error) => console.error('Error fetching rides:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">All Rides</h1>
      <ul className="list-group"></ul>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id} className="list-group-item">
            <p>Start Location: {ride.start_location}</p>
            <p>End Location: {ride.end_location}</p>
            <p>Ride Time: {ride.ride_time}</p>
            <p>Fare: {ride.fare}</p>
            <p>TotalCapacity: {ride.total_capacity}</p>
            <p>CurrentCapacity: {ride.current_capacity}</p>
            <p>Ride_Status: {ride.ride_status}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default ViewRides;
