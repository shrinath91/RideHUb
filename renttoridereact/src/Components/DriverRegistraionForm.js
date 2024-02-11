import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DriverRegistrationForm() {
  const init = {
    user_name: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
    fname: { value: "", valid: false, touched: false, error: "" },
    lname: { value: "", valid: false, touched: false, error: "" },
    contact: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    address: { value: "", valid: false, touched: false, error: "" },
    emergency_contact: { value: "", valid: false, touched: false, error: "" },
    formValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
      case "reset":
        return init;
      default:
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("xx");
  const [insertMsg, setInsertMsg] = useState("");

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
        user_name: user.user_name.value,
        password: user.password.value,
        lname: user.lname.value,
        fname: user.fname.value,
        contact: user.contact.value,
        role: role,
        email: user.email.value,
        address: user.address.value,
        emergency_contact: user.emergency_contact.value,
      }),
    };
    fetch("http://localhost:8080/register", reqOptions)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(JSON.stringify(data));
    });

    navigate("/", { state: user });
  };

  const validateData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "user_name":
        // let patternuser_name = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]{3,}$/;
        let patternuser_name = /^[A-Za-z]+@\d+$/;
        if (!patternuser_name.test(val)) {
          valid = false;
          error = "Username shoud of form 'xyz@123'";
        }
        break;
      case "password":
        let patternpassword = /^[A-Za-z0-9@_]{8,15}$/;
        if (!patternpassword.test(val)) {
          valid = false;
          error = "Password should be between 8-15 characters";
        }
        break;
      case "fname":
        let fnamePattern = /^[A-Z]{1}[a-z]{1,}$/;
        valid = fnamePattern.test(val);
        error = "First Name is required";
        break;
      case "lname":
        let lnamePattern = /^[A-Z]{1}[a-z]{1,}$/;
        valid = lnamePattern.test(val);
        error = "Last Name is required";
        break;
      case "contact":
        let patterncontact = /^[0-9]{10}$/;
        if (!patterncontact.test(val)) {
          valid = false;
          error = "Contact no should be 10 digits only";
        }
        break;
      case "email":
        let patternemail = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/;
        if (!patternemail.test(val)) {
          valid = false;
          error = "Invalid email";
        }
        break;
      // case "address":
      //   let patternaddress = /^[A-Z]{1}[a-z]{1,}$/;
      //   valid = patternaddress.test(val);
      //   error = "address is required";
      //   break;
      case "emergency_contact":
        let patternemergency_contact = /^[0-9]{10}$/;
        if (!patternemergency_contact.test(val)) {
          valid = false;
          error = "emergency_contact no should be 10 digits only";
        }
        break;
      default:
    }
    return { valid: valid, error: error };
  };

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
      data: { key, value, touched: true, valid, error, formValid },
    });
  };
  const[role,setRole] = useState("");
  return (
    <div className="container d-flex justify-content-center ">
      <div className="shadow-lg p-4 m-5" style={{ width: "50rem" }}>
        <h1 className="d-flex justify-content-center text-success mb-3">
          Registration Form !
        </h1>
        <form>
            <label>Role Name:</label>
          <select id="role_name" name="role_name" required onChange={(e)=>{setRole(e.target.value); console.log(e.target.value)}}>
            <option value="">Select</option>
            <option value="3">Passenger</option>
            <option value="2">Driver</option>
          </select><br/><br/>
          <span> Username : </span>
          <input
            type="text"
            name="user_name"
            value={user.user_name.value}
            onChange={(e) => {
              handleChange("user_name", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("user_name", e.target.value);
            }}
            className="form-control"
            required
            placeholder="Enter username"
          />
          <br />
          <div
            style={{
              display:
                user.user_name.touched && !user.user_name.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.user_name.error}
          </div>
          <span> Password : </span>{" "}
          <input
            type="password"
            name="password"
            value={user.password.value}
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("password", e.target.value);
            }}
            className="form-control"
            placeholder="Enter Password"
            required
          />
          <br />
          <div
            style={{
              display:
                user.password.touched && !user.password.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.password.error}
          </div>
          <span> First Name : </span>{" "}
          <input
            type="text"
            name="fname"
            value={user.fname.value}
            onChange={(e) => {
              handleChange("fname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("fname", e.target.value);
            }}
            className="form-control"
            placeholder="Enter fname"
            required
          />
          <br />
          <div
            style={{
              display:
                user.fname.touched && !user.fname.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.fname.error}
          </div>
          <span> Last Name : </span>{" "}
          <input
            type="text"
            name="lname"
            value={user.lname.value}
            onChange={(e) => {
              handleChange("lname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("lname", e.target.value);
            }}
            className="form-control"
            placeholder="Enter lname"
            required
          />
          <br />
          <div
            style={{
              display:
                user.lname.touched && !user.lname.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.lname.error}
          </div>
          <span> Contact : </span>{" "}
          <input
            type="number"
            name="contact"
            value={user.contact.value}
            onChange={(e) => {
              handleChange("contact", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("contact", e.target.value);
            }}
            className="form-control"
            placeholder="Enter Mobile no"
            required
          />
          <br />
          <div
            style={{
              display:
                user.contact.touched && !user.contact.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.contact.error}
          </div>
          <span> Email :</span>{" "}
          <input
            type="email"
            name="email"
            value={user.email.value}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("email", e.target.value);
            }}
            className="form-control"
            placeholder="Enter email"
            required
          />
          <br />
          <div
            style={{
              display:
                user.email.touched && !user.email.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.email.error}
          </div>
          <span> Address :</span>{" "}
          <input
            type="text"
            name="address"
            value={user.address.value}
            onChange={(e) => {
              handleChange("address", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("address", e.target.value);
            }}
            className="form-control"
            placeholder="Enter address"
            required
          />
          <br />
          <div
            style={{
              display:
                user.address.touched && !user.address.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.address.error}
          </div>
          <span> Emergency Contact : </span>{" "}
          <input
            type="text"
            name="emergency_contact"
            value={user.emergency_contact.value}
            onChange={(e) => {
              handleChange("emergency_contact", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("emergency_contact", e.target.value);
            }}
            className="form-control"
            placeholder="Enter Mobile no"
          />
          <br />
          <div
            style={{
              display:
                user.emergency_contact.touched && !user.emergency_contact.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.emergency_contact.error}
          </div>
          <input
            type="submit"
            value="Register"
            disabled={!user.formValid}
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
          {/* <div className="text-center mb-3">
            <p>
              Registeration done!!<a href="/login">LoginPage</a>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
}