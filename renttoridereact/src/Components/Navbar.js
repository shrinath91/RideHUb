// import React from 'react'
// import { Link } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <div>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <a className="navbar-brand" href="/">RideHub</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
  
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//         <Link className="btn btn-outline-success" to="/about">
//                     AboutUs</Link> 
//         </li>
//       </ul>
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//         <Link className="btn btn-outline-success" to="/login">
//                     Login</Link> 
//         </li>
//       </ul>
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//         <Link className="btn btn-outline-success" to="/driver_register">
//                     RegisterDriver</Link> 
//         </li>
//       </ul>
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//         <Link className="btn btn-outline-success" to="/passenger_registration">
//                     RegisterPassenger</Link> 
//         </li>
//       </ul>
//       </div>
//   </nav>
//   <div className="container mt-4">
//         <h1>Welcome to RideHub</h1>
//         <h6>Find your ride, book, and enjoy!</h6>
//       </div>

// </div>
  
  
     
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">RideHub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/driver_register">Register Driver</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/passenger_registration">Register Passenger</Link>
        </li>
      </ul>
    </div>
  </nav>
);

const HomePage = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <h1>Welcome to RideHub</h1>
      <h6>Find your ride, book, and enjoy!</h6>
    </div>
  </div>
);

export default HomePage;

/////
