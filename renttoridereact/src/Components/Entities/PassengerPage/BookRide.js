import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookRide = ({ isLoggedIn, handleLogout }) => {
    const [rideDetails, setRideDetails] = useState(null);
    const [error, setError] = useState(false);
    const [bookingCapacity, setBookingCapacity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const[msg,setMsg]=useState("");
    const navigate = useNavigate();
    var rideid = localStorage.getItem("rideid");
    var data = JSON.parse(localStorage.getItem("loggedin"));
    useEffect(() => {
        rideid = localStorage.getItem("rideid");
        fetch("http://localhost:8080/getdride?rid=" + rideid)
            .then((resp) => resp.json())
            .then((data) => setRideDetails(data))
            .catch((error) => setError(error.message));
    }, []);

    const[capacity, setcapacity]=useState(0);
    const handleBookingCapacityChange = (e) => {
        const newBookingCapacity = parseInt(e.target.value);
        console.log(newBookingCapacity)
        setBookingCapacity(newBookingCapacity);

        const availableCapacity = rideDetails ? rideDetails[0][4] - rideDetails[0][3] : 0;
        if (newBookingCapacity > availableCapacity) {
            setError('Booking capacity exceeds available capacity');
        } else {
            setcapacity(newBookingCapacity)
            setError(false);
        }

    };

    const handleCalculateTotal = () => {
        const availableCapacity = rideDetails[0][4] - rideDetails[0][3];
        if (bookingCapacity <= availableCapacity) {
            const newTotalAmount = bookingCapacity * rideDetails[0][2];
            setTotalAmount(newTotalAmount);
            setError(false); // Reset error state if no error
        } else {
            setError('Booking capacity exceeds available capacity');
        }
    };

    const handleSubmit = (e) => {
        if(capacity<0 || capacity ===0){ setMsg("enter valid capacity first!!")}else{
            setMsg("");
        e.preventDefault();
        console.log("on cliced on submit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // handleCalculateTotal();
        // You can add the logic to book the ride here
        const requestdata = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                ride_id : rideid,
                pass_id : data.user_id,
                capacity : capacity,
                total_ammt : totalAmount
            }),
        };
        fetch("http://localhost:8080/saveBooking",requestdata)
        .then((resp) => resp.json())
        .then((data) => {
            if(data.length == 0){
                throw new Error();
            }else{
                alert("Ride Booked!!!")
                navigate("/passenger_home")
            }
        })
        .catch((error) => setError(error.message));}
    };

    
    return (
        <div>
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
                <Link className="nav-link active" aria-current="page" to="/searchRide">Search Rides</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oldRides">OldRides</Link>
              </li>
            </ul>
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
        <div className="container">
            {/* <div>{data.user_id}</div> */}
            {rideDetails && (
                <div className="mt-4">
                    <h2>Ride Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>From:</strong> {rideDetails[0][0]}</li>
                        <li className="list-group-item"><strong>To:</strong> {rideDetails[0][1]}</li>
                        <li className="list-group-item"><strong>Fare:</strong> {rideDetails[0][2]}</li>
                        <li className="list-group-item"><strong>Current Capacity:</strong> {rideDetails[0][3]}</li>
                        <li className="list-group-item"><strong>Total Capacity:</strong> {rideDetails[0][4]}</li>
                    </ul>
                    <h2 className="mt-4">Driver Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Name:</strong> {rideDetails[0][5] + " " + rideDetails[0][6]}</li>
                        <li className="list-group-item"><strong>Contact:</strong> {rideDetails[0][8]}</li>
                        <li className="list-group-item"><strong>Rating:</strong> {rideDetails[0][7]}</li>
                        <li className="list-group-item"><strong>Email:</strong> {rideDetails[0][9]}</li>
                        <li className="list-group-item"><strong>Car Make:</strong> {rideDetails[0][10]}</li>
                        <li className="list-group-item"><strong>Car Model:</strong> {rideDetails[0][11]}</li>
                        <li className="list-group-item"><strong>Car Plate:</strong> {rideDetails[0][12]}</li>
                    </ul>
                    
                    <form className="mt-4">
                        <div className="form-group">
                            <label htmlFor="bookingCapacity">Booking Capacity:</label>
                            <input type="number" className="form-control" id="bookingCapacity"  onChange={handleBookingCapacityChange} />
                            <div className="text-danger mt-2">{error}</div> {/* Always reserve space for the error message */}
                        </div>
                        {totalAmount > 0 && (
                        <div className="mt-3">
                            <h3>Total Amount: {totalAmount}</h3>
                        </div>
                        )}
                        <div>
                            {msg}
                        </div>
                        <input type="button" className="btn btn-primary ml-2" value={"Calculate Final Amount"} onClick={handleCalculateTotal}/>
                        &nbsp;
                        <input type="button" className="btn btn-primary ml-2" value={"Book Ride"} onClick={(e)=>{handleSubmit(e)}}/>
                    </form>
                   
                </div>
            )}
            {!rideDetails && <div style={{ height: '20px' }}></div>} {/* Reserve space for the error message */}
        </div>
        </div>
    );

    
}

export default BookRide;


// import React, { useEffect, useState } from 'react';

// const BookRide = () => {
//     const [rideDetails, setRideDetails] = useState(null);
//     const [error, setError] = useState(false);
//     const [bookingCapacity, setBookingCapacity] = useState(0);
//     const [totalAmount, setTotalAmount] = useState(0);

//     useEffect(() => {
//         const rideid = localStorage.getItem("rideid");
//         fetch("http://localhost:8080/getdride?rid=" + rideid)
//             .then((resp) => resp.json())
//             .then((data) => setRideDetails(data))
//             .catch((error) => setError(error.message));
//     }, []);

//     const handleBookingCapacityChange = (e) => {
//         const newBookingCapacity = parseInt(e.target.value);
//         setBookingCapacity(newBookingCapacity);

//         const availableCapacity = rideDetails ? rideDetails[0][4] - rideDetails[0][3] : 0;
//         if (newBookingCapacity > availableCapacity) {
//             setError('Booking capacity exceeds available capacity');
//         } else {
//             setError(false);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const availableCapacity = rideDetails[0][4] - rideDetails[0][3];
//         if (bookingCapacity <= availableCapacity) {
//             const newTotalAmount = bookingCapacity * rideDetails[0][2];
//             setTotalAmount(newTotalAmount);
//             setError(false); // Reset error state if no error
//         } else {
//             setError('Booking capacity exceeds available capacity');
//         }
//     };

//     return (
//         <div className="container">
//             <h1 className="mt-5">Book Ride</h1>
//             {rideDetails && (
//                 <div className="mt-5">
//                     <h2>Ride Details</h2>
//                     <ul className="list-group">
//                         <li className="list-group-item"><strong>From:</strong> {rideDetails[0][0]}</li>
//                         <li className="list-group-item"><strong>To:</strong> {rideDetails[0][1]}</li>
//                         <li className="list-group-item"><strong>Fare:</strong> {rideDetails[0][2]}</li>
//                         <li className="list-group-item"><strong>Current Capacity:</strong> {rideDetails[0][3]}</li>
//                         <li className="list-group-item"><strong>Total Capacity:</strong> {rideDetails[0][4]}</li>
//                     </ul>
//                     <h2 className="mt-4">Driver Details</h2>
//                     <ul className="list-group">
//                         <li className="list-group-item"><strong>Name:</strong> {rideDetails[0][5] + " " + rideDetails[0][6]}</li>
//                         <li className="list-group-item"><strong>Contact:</strong> {rideDetails[0][8]}</li>
//                         <li className="list-group-item"><strong>Rating:</strong> {rideDetails[0][7]}</li>
//                         <li className="list-group-item"><strong>Email:</strong> {rideDetails[0][9]}</li>
//                         <li className="list-group-item"><strong>Car Make:</strong> {rideDetails[0][10]}</li>
//                         <li className="list-group-item"><strong>Car Model:</strong> {rideDetails[0][11]}</li>
//                         <li className="list-group-item"><strong>Car Plate:</strong> {rideDetails[0][12]}</li>
//                     </ul>
//                     {totalAmount > 0 && (
//                         <div className="mt-3">
//                             <h3>Total Amount: {totalAmount}</h3>
//                         </div>
//                     )}
//                     <form onSubmit={handleSubmit} className="mt-4">
//                         <div className="form-group">
//                             <label htmlFor="bookingCapacity">Booking Capacity:</label>
//                             <input type="number" className="form-control" id="bookingCapacity" value={bookingCapacity} onChange={handleBookingCapacityChange} />
//                             <div className="text-danger mt-2">{error}</div> {/* Always reserve space for the error message */}
//                         </div>
//                         <button type="submit" className="btn btn-primary">Book Capacity</button>
//                     </form>
//                 </div>
//             )}
//             {!rideDetails && <div style={{ height: '20px' }}></div>} {/* Reserve space for the error message */}
//         </div>
//     );
// }

// export default BookRide;
