import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostRide({ isLoggedIn, handleLogout, username }) {
  const init = {
    start_location: { val: '', valid: false, touched: false, error: '' },
    end_location: { val: '', valid: false, touched: false, error: '' },
    ride_time: { val: '', valid: false, touched: false, error: '' },
    fare: { val: '', valid: false, touched: false, error: '' },
    total_capacity: { val: '', valid: false, touched: false, error: '' },
    current_capacity: { val: '', valid: false, touched: false, error: '' },
    formValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, val, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { val, touched, valid, error }, formValid };
      case "reset":
        return init;
      default:
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("xx");
  //const [insertMsg, setInsertMsg] = useState("");
  //console.log({msg});
  let navigate = useNavigate();

  useEffect(() => {
    setMsg(JSON.parse(localStorage.getItem("loggedin")));
  }, []);

  const submitData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ride_driver_id: msg.user_id,
        start_location: user.start_location.val,
        end_location: user.end_location.val,
        ride_time: user.ride_time.val,
        fare: user.fare.val,
        total_capacity: user.total_capacity.val,
        current_capacity: user.current_capacity.val,
      }),
    };
    console.log("88888888888888888888888888888888888888888888888888")
    console.log(JSON.stringify(user))
    console.log(reqOptions.body);


    fetch("http://localhost:8080/postRide", reqOptions)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(JSON.stringify(data));
      });

    navigate("/driver_home", { state: user });
  };

  const validateData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case 'start_location':
      case 'end_location':
        if (!val.trim()) {
          valid = false;
          error = 'This field is required';
        }
        break;
      case 'ride_time':
        const rideTime = new Date(val).getTime();
        const currentTime = new Date().getTime();
        if (rideTime <= currentTime) {
          valid = false;
          error = 'Ride time must be in the future';
        }
        break;
      case 'fare':
      case 'total_capacity':
      case 'current_capacity':
        if (!val || isNaN(val) || val <= 0) {
          valid = false;
          error = 'Please enter a valid number';
        }
        break;
      default:
    }
    return { valid: valid, error: error };
  };
  

  // const handleChange = (key, val) => {
  //   const { valid, error } = validateData(key, val);
  //   let formValid = true;
  //   for (let k in user) {
  //     if (user[k].valid === false) {
  //       formValid = false;
  //       break;
  //     }
  //   }
  //   console.log(formValid);
  //   dispatch({
  //     type: "update",
  //     data: { key, val, touched: true, valid, error, formValid },
  //   });
  // };
  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
    let formValid = true;
    for (let k in user) {
      if (user[k].valid === false) {
        formValid = false;
        break;
      }
    }
    console.log(formValid);
    dispatch({
      type: "update",
      data: { key, val: value, touched: true, valid, error, formValid },
    });
  };

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
    <div className="container d-flex justify-content-center ">
      <div className="shadow-lg p-4 m-5" style={{ width: "50rem" }}>
        <h1 className="d-flex justify-content-center text-success mb-3">
          Post a Ride!
        </h1>
        <form>
          <span> start_location : </span>
          <input
            type="text"
            name="start_location"
            value={user.start_location.val}
            onChange={(e) => {
              handleChange("start_location", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("start_location", e.target.value);
            }}
            className="form-control"
            required
            placeholder="Enter start_location"
          />
          <br />
          <div
            style={{
              display:
                user.start_location.touched && !user.start_location.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.start_location.error}
          </div>
          <span> end_location : </span>{" "}
          <input
            type="text"
            name="end_location"
            val={user.end_location.val}
            onChange={(e) => {
              handleChange("end_location", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("end_location", e.target.value);
            }}
            className="form-control"
            placeholder="Enter end_location"
            required
          />
          <br />
          <div
            style={{
              display:
                user.end_location.touched && !user.end_location.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.end_location.error}
          </div>
          <span> Ride Time : </span>{" "}
          <input
            type="datetime-local"
            name="ride_time"
            val={user.ride_time.val}
            onChange={(e) => {
              handleChange("ride_time", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("ride_time", e.target.value);
            }}
            className="form-control"
            placeholder="Enter ride_time"
            required
          />
          <br />
          <div
            style={{
              display:
                user.ride_time.touched && !user.ride_time.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.ride_time.error}
          </div>
          <span> Fare : </span>{" "}
          <input
            type="number"
            name="fare"
            val={user.fare.val}
            onChange={(e) => {
              handleChange("fare", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("fare", e.target.value);
            }}
            className="form-control"
            placeholder="Enter fare"
            required
          />
          <br />
          <div
            style={{
              display:
                user.fare.touched && !user.fare.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.fare.error}
          </div>
          <span> TotalCapacity : </span>{" "}
          <input
            type="number"
            name="total_capacity"
            val={user.total_capacity.val}
            onChange={(e) => {
              handleChange("total_capacity", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("total_capacity", e.target.value);
            }}
            className="form-control"
            placeholder="Enter total_capacity"
            required
          />
          <br />
          <div
            style={{
              display:
                user.total_capacity.touched && !user.total_capacity.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.total_capacity.error}
          </div>
          <span> current_capacity : </span>{" "}
          <input
            type="text"
            name="current_capacity"
            val={user.current_capacity.val}
            onChange={(e) => {
              handleChange("current_capacity", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("current_capacity", e.target.value);
            }}
            className="form-control"
            placeholder="Enter current_capacity"
          />
          <br />
          <div
            style={{
              display:
                user.current_capacity.touched && !user.current_capacity.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.current_capacity.error}
          </div>
          <input
            type="submit"
            val="Register"
            onClick={(e) => {
              submitData(e);
            }}
            className="form-control"
          />
          <br />
          <input
            type="reset"
            val="Clear"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
            className="form-control btn btn-primary"
          />
        </form>
      </div>
    </div>
    </div>
  );
}