import React from 'react';

const DriverHome = () => {
  
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Driver Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PostRides</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MyRides</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">OldRides</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
     <h1>This is driver Page</h1>
    </div>
  );
};

export default DriverHome;
