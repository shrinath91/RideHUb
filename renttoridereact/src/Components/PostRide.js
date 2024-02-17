import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostRide() {
  const init = {
    start_location: { value: '', valid: false, touched: false, error: '' },
    end_location: { value: '', valid: false, touched: false, error: '' },
    ride_time: { value: '', valid: false, touched: false, error: '' },
    fare: { value: '', valid: false, touched: false, error: '' },
    total_capacity: { value: '', valid: false, touched: false, error: '' },
    current_capacity: { value: '', valid: false, touched: false, error: '' },
    formvalid: false,
  };

  const data=localStorage.getItem("loggedin");
  console.log(data);

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formvalid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formvalid };
      case "reset":
        return init;
      default:
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("xx");
  //const [insertMsg, setInsertMsg] = useState("");
  console.log({msg});
  let navigate = useNavigate();

  useEffect(() => {
    setMsg(localStorage.getItem("msg"));
  }, []);

  var submitData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ride_driver_id:user.ride_driver_id.value,
        start_location: user.start_location.value,
        end_location: user.end_location.value,
        ride_time: user.ride_time.value,
        fare: user.fare.value,
        total_capacity: user.total_capacity.value,
        current_capacity: user.current_capacity.value,
        ride_status:user.ride_status.value
      }),
    };
    fetch("http://localhost:8080/postRide", reqOptions)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(JSON.stringify(data));
    });

    navigate("/driver_home", { state: user });
  };

  const validateData = (key, value) => {
    let valid = true;
    let error = "";
    switch (key) {

      case 'start_location':
        case 'end_location':
          // if (!value.trim()) {
          //   valid = false;
          //   error = 'This field is required';
          // }
          break;
        case 'ride_time':
          // if (!value) {
          //   valid = false;
          //   error = 'This field is required';
          // }
          break;
        case 'fare':
        case 'total_capacity':
        case 'current_capacity':
          // if (!value || isNaN(value) || value <= 0) {
          //   valid = false;
          //   error = 'Please enter a valid number';
          // }
          break;
        default:
    }
    return { valid: valid, error: error };
  };

  // const handleChange = (key, value) => {
  //   const { valid, error } = validateData(key, value);
  //   let formvalid = true;
  //   for (let k in user) {
  //     if (user[k].valid === false) {
  //       formvalid = false;
  //       break;
  //     }
  //   }
  //   console.log(formvalid);
  //   dispatch({
  //     type: "update",
  //     data: { key, value, touched: true, valid, error, formvalid },
  //   });
  // };
  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
    let formvalid = true;
    for (let k in user) {
      if (user[k].valid === false) {
        formvalid = false;
        break;
      }
    }
    console.log(formvalid);
    dispatch({
      type: "update",
      data: { key, value: value, touched: true, valid, error, formvalid },
    });
  };
  
  return (
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
            value={user.start_location.value}
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
            value={user.end_location.value}
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
            type="time"
            name="ride_time"
            value={user.ride_time.value}
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
            value={user.fare.value}
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
            value={user.total_capacity.value}
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
            value={user.current_capacity.value}
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
            value="Register"
            disabled={!user.formvalid}
            onClick={(e) => {
              submitData(e);
            }}
            className="form-control"
          />
          <br />
          <input
            type="reset"
            value="Clear"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
            className="form-control btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
}