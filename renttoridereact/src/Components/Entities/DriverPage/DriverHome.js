import React from 'react';
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';

const DriverHome = ({ isLoggedIn, handleLogout}) => {
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
                <Link className="nav-link" to="/myRide">My Rides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oldRide">Old Rides</Link>
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
      
      {/* Page Content */}
     
      <h4>Welcome {username}</h4>
    </div>
  );
};

export default DriverHome;



// import React from 'react';
// import { Link } from "react-router-dom";

// const DriverHome = ({ isLoggedIn, handleLogout, username }) => {
  
//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <span className="navbar-brand">Driver Home</span>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/postRides">Post Rides</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/myRide">My Rides</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/oldRide">Old Rides</Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav ms-auto">
//               {isLoggedIn ? (
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-outline-text-success"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               ) : (
//                 <li className="nav-item">
//                   <Link className="btn btn-outline-primary" to="/logout">
//                     Logout
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//       {/* Page Content */}
//       <h1>This is the driver page</h1>
//       <h1>Welcome {username}</h1>
//     </div>
//   );
// };

// export default DriverHome;
