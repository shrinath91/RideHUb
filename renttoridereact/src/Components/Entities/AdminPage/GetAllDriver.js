// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const GetAllDriver = ({ isLoggedIn, handleLogout }) => {
//   const [drivers, setDrivers] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);
//   // const [approvedDrivers, setApprovedDrivers] = useState([]);

//   // useEffect(() => {
//   //   fetch(`http://localhost:8080/getAllDriver`)
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Failed to fetch drivers");
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       setDrivers(data);
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       setError("Error fetching drivers. Please try again later.");
//   //       setLoading(false);
//   //       console.error("Error fetching drivers:", error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     // Fetch driver from the API
//     fetch('http://localhost:8080/getAllDriver')
//       .then(response => response.json())
//       .then(data => setDrivers(data))
//       .catch(error => console.error('Error fetching drivers', error));
//   }, []);


  
//   // const handleApprove = (driver_user_id) => {
//   //   fetch(`http://localhost:8080/approveDriver/${driver_user_id}`, {
//   //     method: 'PUT',
//   //   })
//   //     .then(response => {
//   //       if (!response.ok) {
//   //         throw new Error('Failed to approve driver');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then(data => {
//   //       // Update the status in your UI
//   //       //updateStatus(driver_user_id, 1); // Pass 1 for approved
//   //       // Update the status in your state
//   //       const updatedDrivers = drivers.map(driver => {
//   //         if (driver.driver_user_id === driver_user_id) {
//   //           return { ...driver, status: 1 };
//   //         }
//   //         return driver;
//   //       });
//   //       setDrivers(updatedDrivers);
//   //       setApprovedDrivers([...approvedDrivers, driver_user_id]);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error approving driver:', error);
//   //     });
//   // }

//   const handleApprove = (driver_user_id) => {
//     fetch(`http://localhost:8080/approveDriver/${driver_user_id}`, {
//       method: 'PUT',
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to approve driver');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Update the status in your state
//         const updatedDrivers = drivers.map(driver => {
//           if (driver.driver_user_id === driver_user_id) {
//             return { ...driver, status: 1 };
//           }
//           return driver;
//         });
//         setDrivers(updatedDrivers);
//       })
//       .catch(error => {
//         console.error('Error approving driver:', error);
//       });
//   }
  
  
//   // const handleReject = (driver_user_id) => {
//   //   fetch(`http://localhost:8080/disapproveDriver/${driver_user_id}`, {
//   //     method: 'PUT',
//   //   })
//   //     .then(response => {
//   //       if (!response.ok) {
//   //         throw new Error('Failed to disapprove driver');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then(data => {
//   //       // Update the status in your UI
//   //       //updateStatus(driver_user_id, 0); // Pass 0 for disapproved
//   //       // Update the status in your state
//   //       const updatedDrivers = drivers.map(driver => {
//   //         if (driver.driver_user_id === driver_user_id) {
//   //           return { ...driver, status: 0 };
//   //         }
//   //         return driver;
//   //       });
//   //       setDrivers(updatedDrivers);
//   //       setApprovedDrivers([...approvedDrivers, driver_user_id]);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error disapproving driver:', error);
//   //     });
//   // }
  
//   const handleReject = (driver_user_id) => {
//     fetch(`http://localhost:8080/disapproveDriver/${driver_user_id}`, {
//       method: 'PUT',
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to disapprove driver');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Update the status in your state
//         const updatedDrivers = drivers.map(driver => {
//           if (driver.driver_user_id === driver_user_id) {
//             return { ...driver, status: 0 };
//           }
//           return driver;
//         });
//         setDrivers(updatedDrivers);
//       })
//       .catch(error => {
//         console.error('Error disapproving driver:', error);
//       });
//   }
  
//   // Update the status in your UI
//   const updateStatus = (driver_user_id, status) => {
//     // Find the driver element in your UI by user_id and update its status
//     const driverElement = document.getElementById(`driver-${driver_user_id}`);
//     if (driverElement) {
//       driverElement.innerText = status === 1 ? 'Approved' : 'Disapproved';
//     }
//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <Link className="navbar-brand" to="/admin_home">
//             Admin Home
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/getallpassengers">
//                   Show Passengers
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/ShowAllTransactions">
//                   Show Transactions
//                 </Link>
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
//       <div className="container mt-5">
//         {/* <h1 className="mb-4">All Drivers</h1> */}

//         {/* {loading && <p>Loading drivers...</p>}
//         {error && <p className="text-danger">{error}</p>}

//         {!loading && !error && ( */}
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {drivers.map((driver) => (
//               <div key={driver.driver_user_id} className="col">
//                 <div className="card h-100">
//                   <div className="card-body">
//                     <h5 className="card-title">{`${driver.fname} ${driver.lname}`}</h5>
//                     <p className="card-text">
//                       <strong>Address:</strong> {driver.address}
//                     </p>
//                     <p className="card-text">
//                       <strong>Contact:</strong> {driver.contact}
//                     </p>
//                     <p className="card-text">
//                       <strong>Email:</strong> {driver.email}
//                     </p>
//                     <p className="card-text">
//                       <strong>Colour:</strong> {driver.colour}
//                     </p>
//                     <p className="card-text">
//                       <strong>Emergency Contact:</strong>{" "}
//                       {driver.emergency_contact}
//                     </p>
//                     <p className="card-text">
//                       <strong>Make:</strong> {driver.make}
//                     </p>
//                     <p className="card-text">
//                       <strong>No Plate:</strong> {driver.no_plate}
//                     </p>
//                     <p className="card-text">
//                       <strong>Model:</strong> {driver.model}
//                     </p>
//                     <p className="card-text">
//                       <strong>Registration No:</strong> {driver.registration_no}
//                     </p>
//                     <p className="card-text">
//                       <strong>Licence No:</strong> {driver.licence_no}
//                     </p>
//                     <div className="d-flex justify-content-between mt-3">
//                     <td
//                    className={driver.driver_user_id.status === 1 ? 'text-success' : 'text-danger'}>
//                     {driver.driver_user_id.status === 1 ? 'Approved' : 'Rejected'}
//                   </td>
//                       <td>
//                         {/* <button
//                           className="btn btn-success ms-2"
//                           onClick={() => handleApprove(driver.driver_user_id.user_id)}
//                           disabled={approvedDrivers.includes(driver.driver_user_id.user_id)}
//                         >
//                           Accept
//                         </button>
//                         <button
//                           className="btn btn-danger ms-2"
//                           onClick={() => handleReject(driver.driver_user_id.user_id)}
//                           disabled={approvedDrivers.includes(driver.driver_user_id.user_id)}
//                         >
//                           Reject
//                         </button> */}
//                         <button
//   className="btn btn-success ms-2"
//   onClick={() => handleApprove(driver.driver_user_id.user_id)}
//   disabled={driver.status === 1}
// >
//   Accept
// </button>
// <button
//   className="btn btn-danger ms-2"
//   onClick={() => handleReject(driver.driver_user_id.user_id)}
//   disabled={driver.status === 0}
// >
//   Reject
// </button>

//                       </td>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//       </div>
//     </div>
//   );
// };

// export default GetAllDriver;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetAllDriver = ({ isLoggedIn, handleLogout }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/getAllDriver`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch drivers");
        }
        return response.json();
      })
      .then((data) => {
        setDrivers(data);
      })
      .catch((error) => {
        console.error("Error fetching drivers:", error);
      });
  }, []);

  const handleApprove = (driver_user_id) => {
    fetch(`http://localhost:8080/approveDriver/${driver_user_id}`, {
      method: "PUT",
    })
      .then((response) => {
        if (!response.ok) {

          throw new Error("Failed to approve driver");
        }
        window.location.reload();
        return response.json();
      })
      .then((data) => {
        setDrivers(
          drivers.map((driver) => {
            if (driver.driver_user_id === driver_user_id) {
              return { ...driver, status: 1 };
            }
            return driver;
          })
        );
      })
      .catch((error) => {
        console.error("Error approving driver:", error);
      });
  };

  const handleReject = (driver_user_id) => {
    fetch(`http://localhost:8080/disapproveDriver/${driver_user_id}`, {
      method: "PUT",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to disapprove driver");
        }
        window.location.reload();
        return response.json();
      })
      .then((data) => {
        setDrivers(
          drivers.map((driver) => {
            if (driver.driver_user_id === driver_user_id) {
              return { ...driver, status: 0 };
            }
            return driver;
          })
        );
      })
      .catch((error) => {
        console.error("Error disapproving driver:", error);
      });
  };

  return (
    <div>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/getallpassengers">
                  Show Passengers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ShowAllTransactions">
                  Show Transactions
                </Link>
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
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {drivers.map((driver) => (
            <div key={driver.driver_user_id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{`${driver.fname} ${driver.lname}`}</h5>
                  <p className="card-text">
                    <strong>Address:</strong> {driver.address}
                  </p>
                  <p className="card-text">
                    <strong>Contact:</strong> {driver.contact}
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> {driver.email}
                  </p>
                  <p className="card-text">
                    <strong>Colour:</strong> {driver.colour}
                  </p>
                  <p className="card-text">
                    <strong>Emergency Contact:</strong>{" "}
                    {driver.emergency_contact}
                  </p>
                  <p className="card-text">
                    <strong>Make:</strong> {driver.make}
                  </p>
                  <p className="card-text">
                    <strong>No Plate:</strong> {driver.no_plate}
                  </p>
                  <p className="card-text">
                    <strong>Model:</strong> {driver.model}
                  </p>
                  <p className="card-text">
                    <strong>Registration No:</strong> {driver.registration_no}
                  </p>
                  <p className="card-text">
                    <strong>Licence No:</strong> {driver.licence_no}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <td
                      className={
                        driver.driver_user_id.status === 1
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {driver.driver_user_id.status === 1
                        ? "Approved"
                        : "Rejected"}
                    </td>
                    <td>
                      <button
                        className="btn btn-success ms-2"
                        onClick={() =>
                          handleApprove(driver.driver_user_id.user_id)
                        }
                        disabled={driver.status === 1}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() =>
                          handleReject(driver.driver_user_id.user_id)
                        }
                        disabled={driver.status === 0}
                      >
                        Reject
                      </button>
                    </td>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetAllDriver;
