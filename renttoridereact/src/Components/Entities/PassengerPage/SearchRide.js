import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SearchRide = ({ isLoggedIn, handleLogout}) => {
    const navigate = useNavigate();
    // State variables to manage rides and search values
    const [rides, setRides] = useState([]);
    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState("");

    // Function to load rides based on search criteria
    const loadRides = () => {
        console.log(startLocation);
        console.log(endLocation);
        const reqOptions = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                start_location: startLocation,
                end_location: endLocation
            }),
        };
        
        // fetch(http://localhost:8080/searchrides?startLocation=${startLocation}&endLocation=${endLocation})
        fetch("http://localhost:8080/searchRide", reqOptions)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setRides(data)
            })
            .catch(() => navigate("/ErrorPage"));
    }

    // Function to book a ride
    const bookRide = (rideId) => {
        // Perform booking logic here, for now, let's just log the rideId
        localStorage.setItem("rideid", JSON.stringify(rideId));
        console.log("Booking ride with ID:", rideId);
        navigate("/bookride")
    }

    return (
        <div>
        {/* Navigation Bar */}
        {/* <div>{JSON.stringify(rides)}</div> */}
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
                  <Link className="nav-link active" aria-current="page" to="/searchRides">Search Rides</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/passenger_home">ViewRides</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/oldRides">OldRides</Link>
                </li>
              </ul>
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
        <div className="innercomps">
            <h1>Rides</h1>
            <br />
            <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Start Location" onChange={(e) => setStartLocation(e.target.value)} />
                <input className="form-control me-2" type="text" placeholder="End Location" onChange={(e) => setEndLocation(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={loadRides}>Search</button>
            </form>
            <br /><br />
            <table className="table table-bordered">
                <thead className="table-info">
                    <tr>
                        <th>Driver Id</th>
                        <th>Driver Name</th>
                        <th>Start Location</th>
                        <th>End Location</th>
                        <th>Fare</th>
                        
                        <th>Total Capacity</th> 
                        <th>Current Capacity</th> 
                        <th>Ride Time</th> 
                        <th>Actions</th> {/* New table header for actions */}
                    </tr>
                </thead>
                <tbody>
                    {rides.map((ride) => (
                        <tr key={ride[0]}>
                            <td>{ride[1]}</td>
                            <td>{ride[2]}</td>
                            <td>{ride[6]}</td>
                            <td>{ride[4]}</td>
                            <td>{ride[5]}</td>
                            <td>{ride[3]}</td>
                            <td>{ride[7]}</td>
                            <td>{ride[8]}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => bookRide(ride[0])}>Book</button> {/* Book button */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const SearchRide = () => {
//     const navigate = useNavigate();

//     // State variables to manage rides and search values
//     const [rides, setRides] = useState([]);
//     const [startLocation, setStartLocation] = useState("");
//     const [endLocation, setEndLocation] = useState("");

//     // Function to load rides based on search criteria
//     const loadRides = () => {
//         console.log(startLocation);
//         console.log(endLocation);
//         const reqOptions = {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
//                 start_location: startLocation,
//                 end_location: endLocation
//             }),
//         };
        
//         // fetch(http://localhost:8080/searchrides?startLocation=${startLocation}&endLocation=${endLocation})
//         fetch(`http://localhost:8080/searchRide`, reqOptions)
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log(data)
//                 setRides(data)
//             })
//             .catch(() => navigate("/ErrorPage"));
//     }

//     // Function to book a ride
//     const bookRide = (rideId) => {
//         // Perform booking logic here, for now, let's just log the rideId
//         localStorage.setItem("rideid",rideId);
//         console.log("Booking ride with ID:", rideId);
//         navigate("/bookRide")
//     }

//     return (
//         <div className="innercomps">
//             <h1>Rides</h1>
//             <br />
//             <form className="d-flex">
//                 <input className="form-control me-2" type="text" placeholder="Start Location" onChange={(e) => setStartLocation(e.target.value)} />
//                 <input className="form-control me-2" type="text" placeholder="End Location" onChange={(e) => setEndLocation(e.target.value)} />
//                 <button className="btn btn-primary" type="button" onClick={loadRides}>Search</button>
//             </form>
//             <br /><br />
//             <table className="table table-bordered">
//                 <thead className="table-info">
//                     <tr>
//                         <th>Driver Id</th> 
//                         <th>Driver Name</th> 
//                         <th>Start Location</th> 
//                         <th>End Location</th> 
//                         <th>Ride Time</th> 
//                         <th>Total Capacity</th> 
//                         <th>Current Capacity</th>  
//                         <th>Fare</th> 
//                         <th>Actions</th> {/* New table header for actions */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rides.map((ride) => (
//                         <tr key={ride[0]}> {/* Added a unique key */}
//                             <td>{ride[1]}</td>
//                             <td>{ride[2]}</td>
//                             <td>{ride[3]}</td>
//                             <td>{ride[4]}</td>
//                             <td>{ride[8]}</td>
//                             <td>{ride[6]}</td>
//                             <td>{ride[7]}</td>
//                             <td>{ride[5]}</td>
//                             <td>
//                                 <button className="btn btn-success" onClick={() => bookRide(ride[0])}>Book</button> {/* Book button */}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const SearchRide = () => {
//     const navigate = useNavigate();

//     // State variables to manage rides and search values
//     const [rides, setRides] = useState([]);
//     const [startLocation, setStartLocation] = useState("");
//     const [endLocation, setEndLocation] = useState("");

//     // Function to load rides based on search criteria
//     const loadRides = () => {
//         console.log(startLocation);
//         console.log(endLocation);
//         const reqOptions = {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
//                 start_location: startLocation,
//                 end_location: endLocation
//             }),
//         };
        
//         // fetch(`http://localhost:8080/searchrides?startLocation=${startLocation}&endLocation=${endLocation}`)
//         fetch(`http://localhost:8080/searchRide`, reqOptions)
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log(data)
//                 setRides(data)
//             })
//             .catch(() => navigate("/ErrorPage"));
//     }

//     // Function to book a ride
//     const bookRide = (rideId) => {
//         // Perform booking logic here, for now, let's just log the rideId
//         console.log("Booking ride with ID:", rideId);
//     }

//     return (
//         <div className="innercomps">
//             <h1>Rides</h1>
//             <br />
//             <form className="d-flex">
//                 <input className="form-control me-2" type="text" placeholder="Start Location" onChange={(e) => setStartLocation(e.target.value)} />
//                 <input className="form-control me-2" type="text" placeholder="End Location" onChange={(e) => setEndLocation(e.target.value)} />
//                 <button className="btn btn-primary" type="button" onClick={loadRides}>Search</button>
//             </form>
//             <br /><br />
//             <table className="table table-bordered">
//                 <thead className="table-info">
//                     <tr>
//                         <th>Driver Id</th>
//                         <th>Driver Name</th>
//                         <th>Start Location</th>
//                         <th>End Location</th>
//                         <th>Ride Time</th> 
//                         <th>Total Capacity</th> 
//                         <th>Current Capacity</th> 
//                         <th>Fare</th>
//                         <th>Actions</th> 
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rides.map((ride) => (
//                         <tr key={ride[0]}> 
//                             <td>{ride[0]}</td>
//                             <td>{ride[1]}</td>
//                             <td>{ride[2]}</td>
//                             <td>{ride[3]}</td>
//                             <td>{ride[7]}</td>
//                             <td>{ride[5]}</td>
//                             <td>{ride[6]}</td>
//                             <td>{ride[4]}</td>
//                             <td>
//                                 <button className="btn btn-success" onClick={() => bookRide(ride[0])}>Book</button> {/* Book button */}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }




