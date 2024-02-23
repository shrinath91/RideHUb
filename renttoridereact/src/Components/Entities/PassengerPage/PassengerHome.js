import React from 'react';
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';

const PassengerHome = ({ isLoggedIn, handleLogout }) => {
  const[rides,setRide] = useState([]);
  useEffect(()=>{
    fetch("https://localhost:7195/api/Ride/getActiveRide")
    .then(obj => obj.json())
    .then(data => setRide(data));
  },[])
  
  // const [username, setUsername] = useState('');
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('loggedin'));
  //   setUsername(storedUser.username);
  // }, []);
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand" >Passenger Home</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/searchRide">Search Rides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewRides">ViewRides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oldRides">OldRides</Link>
              </li>
            </ul>. 
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


      {/* <h4>Welcome {username}</h4> */}
      </div>

    
  );
};

export default PassengerHome;
