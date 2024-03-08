import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const MyRide = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const driverId = JSON.parse(localStorage.getItem("loggedin"));
        fetch(`http://localhost:8080/getMyRide/${driverId.user_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRides(data) 
            })
            .catch((error) => {
                console.error("Error fetching rides:", error);
                // Display an error message to the user
            });
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/driver_home">
                        Driver Home
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
                                <Link className="nav-link" to="/postRides">Post Rides</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/oldRide">Old Rides</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="btn btn-outline-primary" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="mt-5">My Rides</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) => (
                            <tr key={index}>
                                <td>{ride[0]}</td>
                                <td>{ride[1]}</td>
                                <td>{ride[2]}</td>
                                <td>{ride[3]}</td>
                                <td>{ride[4]}</td>
                                <td>{ride[5]}</td>
                                <td>{ride[6]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRide;



