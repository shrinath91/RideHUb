import React from 'react';


const PassengerHome = () => {
  // Dummy data for rides (replace with actual data from backend)
  const rides = [
    {
      id: 1,
      name: 'Ride 1',
      description: 'Description of Ride 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Ride 2',
      description: 'Description of Ride 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more rides as needed
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Passenger Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Search Rides</a>
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
      <div className="container mt-4">
        <h2>Available Rides</h2>
        <div className="row">
          {rides.map((ride) => (
            <div key={ride.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={ride.imageUrl} className="card-img-top" alt="Ride" />
                <div className="card-body">
                  <h5 className="card-title">{ride.name}</h5>
                  <p className="card-text">{ride.description}</p>
                  <a href="#" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassengerHome;
