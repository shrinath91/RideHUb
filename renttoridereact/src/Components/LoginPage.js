import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
  //inital object
  const init = {
    username: "",
    password: "",
  };

  //function for dispatcher
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
    }
  };

  const navigate = useNavigate();

  //dispatch to modify info object
  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/verifyLogin", reqOptions)
      .then((resp) => {
        if (resp.ok) {
          return resp.text();
        } else {
          throw new Error("Service Error");
        }
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Account not found");
        } else {
          if (obj.id_approved === false) {
            setMsg("Request not approved");
          } else {
            localStorage.setItem("loggedin",JSON.stringify(obj))
            console.log(obj.role_id);
            if (obj.role_id.role_id === 1) {
              navigate("/admin_home");
            } else if (obj.role_id.role_id === 2) {
              navigate("/driver_home");
            } else if (obj.role_id.role_id === 3) {
              navigate("/passenger_home");
            }
          }
        }
      })
      .catch((error) => {
        navigate("/serverError");
      });
  };

  return (

    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">RideHub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link className="btn btn-outline-success" to="/about">
                    AboutUs</Link> 
        </li>
      </ul>
      </div>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="btn btn-outline-success" to="/">
                    Home</Link> 
        </li>
      </ul>
  </nav>
    <div>
      {/* <div className="form-Container">
        <span id="login-label">Login</span> */}
        <div className="container d-flex justify-content-center ">
      <div className="shadow-lg p-4 m-5" style={{ width: "50rem" }}>
        <h1 className="d-flex justify-content-center text-success mb-3">
          Login
        </h1>
        <form method="POST">
          <div className="form-group">
            <label htmlFor="">User id</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={info.username}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "username",
                  val: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={info.password}
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "password",
                  val: e.target.value,
                });
              }}
            />
          </div>

          <div className="button-container">
            <button
              type=""
              className="btn btn-primary w-100 font-weight-bold mt-2"
              onClick={(e) => sendData(e)}
            >
              Submit
            </button>
          </div>
          <button
            type="button"
            className="btn btn-secondary w-100 font-weight-bold mt-2"
          >
            Cancel
          </button>
          <div className="error">{msg}</div>
        </form>
        <div className="text-center mb-3">
          <div>
            Not a member?{" "}
            <button onClick={() => navigate("/driver_register")}>
              Register Driver
            </button>
          </div>
          <div>
            Not a member?{" "}
            <button onClick={() => navigate("/passenger_registration")}>
              Register Passenger
            </button>
          </div>
        </div>
      </div>
      </div></div>
      </div>
    
  );
}

export default LoginPage;
