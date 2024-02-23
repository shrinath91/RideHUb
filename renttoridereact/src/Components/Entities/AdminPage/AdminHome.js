import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
const AdminHome = ({ isLoggedIn, handleLogout }) => {

  const [username, setUsername] = useState('');
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedin'));
    setUsername(storedUser.username);
  }, []);
  return (
    
    <div>
      {/* Navigation Bar */}
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
                <Link className="nav-link active" to="/getallpassengers">
                  Show Passengers
                </Link>
              </li>
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
            <div>
        
      </div>
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
        <h4>Welcome {username}</h4>
      </div>
    </div>
  );
};

export default AdminHome;
