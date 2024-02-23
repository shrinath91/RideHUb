// import { useEffect } from "react";
// import { useReducer } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function DriverRegistraion() {
//   const init = {
//     username: { value: "", valid: false, touched: false, error: "" },
//     password: { value: "", valid: false, touched: false, error: "" },
//     fname: { value: "", valid: false, touched: false, error: "" },
//     lname: { value: "", valid: false, touched: false, error: "" },
//     contact: { value: "", valid: false, touched: false, error: "" },
//     email: { value: "", valid: false, touched: false, error: "" },
//     address: { value: "", valid: false, touched: false, error: "" },
//     model:{ value: "", valid: false, touched: false, error: "" },
//     licence_no:{ value: "", valid: false, touched: false, error: "" },
//     emergency_contact: { value: "", valid: false, touched: false, error: "" },
//     no_plate: { value: "", valid: false, touched: false, error: "" },
//     registration_no: { value: "", valid: false, touched: false, error: "" },
//     colour: { value: "", valid: false, touched: false, error: "" },
//     make: { value: "", valid: false, touched: false, error: "" },
//     formValid: false,
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         const { key, value, touched, valid, error, formValid } = action.data;
//         return { ...state, [key]: { value, touched, valid, error }, formValid };
//       case "reset":
//         return init;
//       default:
//     }
//   };

//   const [user, dispatch] = useReducer(reducer, init);
//   const [msg, setMsg] = useState("xx");
//   //const [insertMsg, setInsertMsg] = useState("");
//   console.log({ msg });
//   let navigate = useNavigate();

//   useEffect(() => {
//     setMsg(localStorage.getItem("msg"));
//   }, []);

//   var submitData = (e) => {
//     e.preventDefault();
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         username: user.username.value,
//         password: user.password.value,
//         lname: user.lname.value,
//         fname: user.fname.value,
//         contact: user.contact.value,
//         email: user.email.value,
//         address: user.address.value,
//         emergency_contact: user.emergency_contact.value,
//         licence_no: user.licence_no.value,
//         no_plate: user.no_plate.value,
//         registration_no: user.registration_no.value,
//         colour: user.colour.value,
//         model:user.model.value,
//         make:user.make.value
//       }),
//     };
//     fetch("http://localhost:8080/registerDriver", reqOptions)
//     .then((resp) => {
//       if(resp.ok){
//         return resp.json();
//       }
//       else{
//         throw new Error("Cannot Register");
//       }
//     })
//     .then((data) => {
//       console.log(JSON.stringify(data));

//       navigate("/login");
//     })
//     .catch((error)=> alert("Server Error:Cannot Register"))
//   };
//   const validateData = (key, val) => {
//     let valid = true;
//     let error = "";
//     switch (key) {
//       case "username":
//         // let patternusername = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]{3,}$/;
//         let patternusername = /^[A-Za-z]+$/;
//         if (!patternusername.test(val)) {
//           valid = false;
//           error = "Username shoud of form 'xyz'";
//         }
//         break;
//       case "password":
//         let patternpassword = /^[A-Za-z0-9@_]{8,15}$/;
//         if (!patternpassword.test(val)) {
//           valid = false;
//           error = "Password should be between 8-15 characters";
//         }
//         break;
//       case "fname":
//         let fnamePattern = /^[A-Z]{1}[a-z]{1,}$/;
//         valid = fnamePattern.test(val);
//         error = "First Name must start with captial letter ";
//         break;
//       case "lname":
//         let lnamePattern = /^[A-Z]{1}[a-z]{1,}$/;
//         valid = lnamePattern.test(val);
//         error = "Last Name must start with capital letter";
//         break;
//       case "contact":
//         let patterncontact = /^[0-9]{10}$/;
//         if (!patterncontact.test(val)) {
//           valid = false;
//           error = "Contact no should be 10 digits only";
//         }
//         break;
//       case "email":
//         let patternemail = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/;
//         if (!patternemail.test(val)) {
//           valid = false;
//           error = "Invalid email";
//         }
//         break;
//       case "emergency_contact":
//         let patternemergency_contact = /^[0-9]{10}$/;
//         if (!patternemergency_contact.test(val)) {
//           valid = false;
//           error = "emergency_contact no should be 10 digits only";
//         }
//         break;
        
//         case "licence_no":
//         let pattern_licence_no = /^[A-Za-z0-9]{6,12}$/;
//         //Example of a license number: ABCD123456
//         if (!pattern_licence_no.test(val)) {
//           valid = false;
//           error = "licence_no is required";
//         }
//         break;

//       case "no_plate":
//         let patternno_plate = /^[A-Za-z]{1,3}\d{1,4}[A-Za-z]{0,3}$/;
//         //"ABC123", "1234XYZ", "AB123"
//         if (!patternno_plate.test(val)) {
//           valid = false;
//           error = "No Plate should be in format  AB123";
//         }
//         break;

//         case "make":
//         let patternmake = /^[A-Za-z0-9\s-]{1,30}$/;
//         if (!patternmake.test(val)) {
//           valid = false;
//           error = "enter make like Toyota Corolla";
//         }
//         break;

//         case "model":
//         let patternmodel = /^[A-Za-z0-9\s-]{1,50}$/;
//         //"ABC123", "1234XYZ", "AB123"
//         if (!patternmodel.test(val)) {
//           valid = false;
//           error = "enter model  like Toyota Corolla";
//         }
//         break;
//       case "registration_no":
//         let patternregistration_no = /^[0-9]{10}$/;
//         if (!patternregistration_no.test(val)) {
//           valid = false;
//           error = "Registration no should be 10 digits only";
//         }
//         break;
//       // Change this case from 'colour' to 'carColour'
//       case "colour":
//         let colourPattern = /^[A-Z]{1}[a-z]{1,}$/;
//         valid = colourPattern.test(val);
//         error = "Enter Car colour ";
//         break;
//       case "address":
//         valid = true;
//         error = "Enter address ";
//         break;
//       default:
//         break;
//     }
//     return { valid: valid, error: error };
//   };
//   const handleChange = (key, value) => {
    
//     const { valid, error } = validateData(key, value);

//     let formValid = true;
//     for (let k in user) {
//       if (user[k].valid === false) {
//         formValid = false;
//         break;
//       }
//     }
//     console.log(formValid);

//     dispatch({
//       type: "update",
//       data: { key, value, touched: true, valid, error, formValid },
//     });
//   };
  
//   return (
//     <div>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <a className="navbar-brand" href="/">RideHub</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//      <li className="nav-item">
//               <Link className="nav-link" to="/login">
//                 Login
//               </Link>
//       </li>
//       <li className="nav-item">
//               <Link className="nav-link" to="/passenger_registration">
//                 RegisterPassenger
//               </Link>
//             </li>
//       </ul>
//       </div>
//   </nav>
//     <div className="container d-flex justify-content-center ">
//       <div className="shadow-lg p-4 m-5" style={{ width: "50rem" }}>
//         <h1 className="d-flex justify-content-center text-success mb-3">
//           Driver Registration Form!
//         </h1>
//         {/* <p>{JSON.stringify(user)}</p> */}
//         <form>
//           <span> Username : </span>
//           <input
//             type="text"
//             name="username"
//             value={user.username.value}
//             onChange={(e) => {
//               handleChange("username", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("username", e.target.value);
//             }}
//             className="form-control"
//             required
//             placeholder="Enter username"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.username.touched && !user.username.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.username.error}
//           </div>
//           <span> Password : </span>{" "}
//           <input
//             type="password"
//             name="password"
//             value={user.password.value}
//             onChange={(e) => {
//               handleChange("password", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("password", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter Password"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.password.touched && !user.password.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.password.error}
//           </div>
//           <span> First Name : </span>{" "}
//           <input
//             type="text"
//             name="fname"
//             value={user.fname.value}
//             onChange={(e) => {
//               handleChange("fname", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("fname", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter fname"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.fname.touched && !user.fname.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.fname.error}
//           </div>
//           <span> Last Name : </span>{" "}
//           <input
//             type="text"
//             name="lname"
//             value={user.lname.value}
//             onChange={(e) => {
//               handleChange("lname", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("lname", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter lname"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.lname.touched && !user.lname.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.lname.error}
//           </div>
//           <span> Contact : </span>{" "}
//           <input
//             type="number"
//             name="contact"
//             value={user.contact.value}
//             onChange={(e) => {
//               handleChange("contact", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("contact", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter Mobile no"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.contact.touched && !user.contact.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.contact.error}
//           </div>
//           <span> Email :</span>{" "}
//           <input
//             type="email"
//             name="email"
//             value={user.email.value}
//             onChange={(e) => {
//               handleChange("email", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("email", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter email"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.email.touched && !user.email.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.email.error}
//           </div>
//           <span> Address :</span>{" "}
//           <input
//             type="text"
//             name="address"
//             value={user.address.value}
//             onChange={(e) => {
//               handleChange("address", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("address", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter address"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.address.touched && !user.address.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.address.error}
//           </div>
//           <span> Emergency Contact : </span>{" "}
//           <input
//             type="text"
//             name="emergency_contact"
//             value={user.emergency_contact.value}
//             onChange={(e) => {
//               handleChange("emergency_contact", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("emergency_contact", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter Mobile no"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.emergency_contact.touched && !user.emergency_contact.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.emergency_contact.error}
//           </div>
//           <span> Car colour: </span>{" "}
//           <input
//             type="text"
//             name="colour"
//             value={user.colour.value}
//             onChange={(e) => {
//               handleChange("colour", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("colour", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter CarColour"
//             required
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.colour.touched && !user.colour.valid ? "block" : "none",
//               color: "red",
//             }}
//           >
//             {user.colour.error}
//           </div>
//           <span> Registration No : </span>{" "}
//           <input
//             type="text"
//             name="registration_no"
//             value={user.registration_no.value}
//             onChange={(e) => {
//               handleChange("registration_no", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("registration_no", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter registration_no"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.registration_no.touched && !user.registration_no.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.registration_no.error}
//           </div>
//           <span> No_plate : </span>{" "}
//           <input
//             type="text"
//             name="no_plate"
//             value={user.no_plate.value}
//             onChange={(e) => {
//               handleChange("no_plate", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("no_plate", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter no_plate"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.no_plate.touched && !user.no_plate.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.no_plate.error}
//             /</div>
//           <span> licence_no: </span>{" "}
//           <input
//             type="text"
//             name="licence_no"
//             value={user.licence_no.value}
//             onChange={(e) => {
//               handleChange("licence_no", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("licence_no", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter licence no"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.licence_no.touched && !user.licence_no.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.licence_no.error}
//           </div><span> model: </span>{" "}
//           <input
//             type="text"
//             name="model"
//             value={user.model.value}
//             onChange={(e) => {
//               handleChange("model", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("model", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter Model"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.model.touched && !user.model.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.model.error}
//           </div><span> make: </span>{" "}
//           <input
//             type="text"
//             name="make"
//             value={user.make.value}
//             onChange={(e) => {
//               handleChange("make", e.target.value);
//             }}
//             onBlur={(e) => {
//               handleChange("make", e.target.value);
//             }}
//             className="form-control"
//             placeholder="Enter Make"
//           />
//           <br />
//           <div
//             style={{
//               display:
//                 user.make.touched && !user.make.valid
//                   ? "block"
//                   : "none",
//               color: "red",
//             }}
//           >
//             {user.make.error}
//           </div>
//           <input
//             type="submit"
//             value="Register"
//             disabled={!user.formValid}
//             onClick={(e) => {
//               submitData(e);
//             }}
//             className="form-control"
//           />
//           <br />
//           <input
//             type="reset"
//             value="Clear"
//             onClick={() => {
//               dispatch({ type: "reset" });
//             }}
//             className="form-control btn btn-primary"
//           />
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DriverRegistraion() {
  const init = {
    username: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
    fname: { value: "", valid: false, touched: false, error: "" },
    lname: { value: "", valid: false, touched: false, error: "" },
    contact: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    address: { value: "", valid: false, touched: false, error: "" },
    model:{ value: "", valid: false, touched: false, error: "" },
    licence_no:{ value: "", valid: false, touched: false, error: "" },
    emergency_contact: { value: "", valid: false, touched: false, error: "" },
    no_plate: { value: "", valid: false, touched: false, error: "" },
    registration_no: { value: "", valid: false, touched: false, error: "" },
    colour: { value: "", valid: false, touched: false, error: "" },
    make: { value: "", valid: false, touched: false, error: "" },
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
  //const [insertMsg, setInsertMsg] = useState("");
  console.log({ msg });
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
        username: user.username.value,
        password: user.password.value,
        lname: user.lname.value,
        fname: user.fname.value,
        contact: user.contact.value,
        email: user.email.value,
        address: user.address.value,
        emergency_contact: user.emergency_contact.value,
        licence_no: user.licence_no.value,
        no_plate: user.no_plate.value,
        registration_no: user.registration_no.value,
        colour: user.colour.value,
        model:user.model.value,
        make:user.make.value
      }),
    };
    fetch("http://localhost:8080/registerDriver", reqOptions)
    .then((resp) => {
      if(resp.ok){
        return resp.json();
      }
      else{
        throw new Error("Cannot Register");
      }
    })
    .then((data) => {
      console.log(JSON.stringify(data));

      navigate("/login");
    })
    .catch((error)=> alert("Server Error:Cannot Register"))
  };
  const validateData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "username":
        // let patternusername = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]{3,}$/;
        let patternusername = /^[A-Za-z]+$/;
        if (!patternusername.test(val)) {
          valid = false;
          error = "Username shoud of form 'xyz'";
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
        error = "First Name must start with captial letter ";
        break;
      case "lname":
        let lnamePattern = /^[A-Z]{1}[a-z]{1,}$/;
        valid = lnamePattern.test(val);
        error = "Last Name must start with capital letter";
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
      case "emergency_contact":
        let patternemergency_contact = /^[0-9]{10}$/;
        if (!patternemergency_contact.test(val)) {
          valid = false;
          error = "emergency_contact no should be 10 digits only";
        }
        break;
        
        case "licence_no":
        let pattern_licence_no = /^[A-Za-z0-9]{15}$/;
        //Example of a license number: ABCD123456
        if (!pattern_licence_no.test(val)) {
          valid = false;
          error = "licence_no must be of 15 digit";
        }
        break;

      case "no_plate":
        let patternno_plate = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
        //"ABC123", "1234XYZ", "AB123"
        if (!patternno_plate.test(val)) {
          valid = false;
          error = "No Plate should be in format  XX12XX1234";
        }
        break;

        case "make":
        let patternmake = /^[A-Za-z0-9\s-]{1,30}$/;
        if (!patternmake.test(val)) {
          valid = false;
          error = "Enter make like Toyota, Suzuki, BMW...";
        }
        break;

        case "model":
        let patternmodel = /^[A-Za-z0-9\s-]{1,50}$/;
        //"ABC123", "1234XYZ", "AB123"
        if (!patternmodel.test(val)) {
          valid = false;
          error = "Enter model  like Wagon-R, Scorpio, Swift...";
        }
        break;
      case "registration_no":
        let patternregistration_no = /^[0-9]{10}$/;
        if (!patternregistration_no.test(val)) {
          valid = false;
          error = "Registration no should be 10 digits only";
        }
        break;
      // Change this case from 'colour' to 'carColour'
      case "colour":
        let colourPattern = /^[A-Z]{1}[a-z]{1,}$/;
        valid = colourPattern.test(val);
        error = "Enter Car colour like White, Black... ";
        break;
      case "address":
        valid = true;
        error = "Enter address ";
        break;
      default:
        break;
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
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">RideHub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
     <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
      </li>
      <li className="nav-item">
              <Link className="nav-link" to="/passenger_registration">
                RegisterPassenger
              </Link>
            </li>
      </ul>
      </div>
  </nav>
    <div className="container d-flex justify-content-center ">
      <div className="shadow-lg p-4 m-5" style={{ width: "50rem" }}>
        <h1 className="d-flex justify-content-center text-success mb-3">
          Driver Registration Form!
        </h1>
        {/* <p>{JSON.stringify(user)}</p> */}
        <form>
          <span> Username : </span>
          <input
            type="text"
            name="username"
            value={user.username.value}
            onChange={(e) => {
              handleChange("username", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("username", e.target.value);
            }}
            className="form-control"
            required
            placeholder="Enter username"
          />
          <br />
          <div
            style={{
              display:
                user.username.touched && !user.username.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.username.error}
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
          <span> Car colour: </span>{" "}
          <input
            type="text"
            name="colour"
            value={user.colour.value}
            onChange={(e) => {
              handleChange("colour", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("colour", e.target.value);
            }}
            className="form-control"
            placeholder="Enter CarColour"
            required
          />
          <br />
          <div
            style={{
              display:
                user.colour.touched && !user.colour.valid ? "block" : "none",
              color: "red",
            }}
          >
            {user.colour.error}
          </div>
          <span> Car Registration No : </span>{" "}
          <input
            type="text"
            name="registration_no"
            value={user.registration_no.value}
            onChange={(e) => {
              handleChange("registration_no", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("registration_no", e.target.value);
            }}
            className="form-control"
            placeholder="Enter registration_no"
          />
          <br />
          <div
            style={{
              display:
                user.registration_no.touched && !user.registration_no.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.registration_no.error}
          </div>
          <span> Number Plate : </span>{" "}
          <input
            type="text"
            name="no_plate"
            value={user.no_plate.value}
            onChange={(e) => {
              handleChange("no_plate", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("no_plate", e.target.value);
            }}
            className="form-control"
            placeholder="Enter no_plate"
          />
          <br />
          <div
            style={{
              display:
                user.no_plate.touched && !user.no_plate.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.no_plate.error}
            /</div>
          <span> Driver Licence_no: </span>{" "}
          <input
            type="text"
            name="licence_no"
            value={user.licence_no.value}
            onChange={(e) => {
              handleChange("licence_no", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("licence_no", e.target.value);
            }}
            className="form-control"
            placeholder="Enter licence no"
          />
          <br />
          <div
            style={{
              display:
                user.licence_no.touched && !user.licence_no.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.licence_no.error}
          </div><span> model: </span>{" "}
          <input
            type="text"
            name="model"
            value={user.model.value}
            onChange={(e) => {
              handleChange("model", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("model", e.target.value);
            }}
            className="form-control"
            placeholder="Enter Model"
          />
          <br />
          <div
            style={{
              display:
                user.model.touched && !user.model.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.model.error}
          </div><span> make: </span>{" "}
          <input
            type="text"
            name="make"
            value={user.make.value}
            onChange={(e) => {
              handleChange("make", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("make", e.target.value);
            }}
            className="form-control"
            placeholder="Enter Make"
          />
          <br />
          <div
            style={{
              display:
                user.make.touched && !user.make.valid
                  ? "block"
                  : "none",
              color: "red",
            }}
          >
            {user.make.error}
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
        </form>
      </div>
    </div>
    </div>
  );
}