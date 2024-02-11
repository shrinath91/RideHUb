import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">RideHub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
        <Link className="btn btn-outline-success" to="/about">
                    AboutUs
                  </Link>
          
        </li>
      </ul>
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
                  <Link className="btn btn-outline-success" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
      <form className="d-flex">
        <input className="form-control my-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  
     
  )
}
