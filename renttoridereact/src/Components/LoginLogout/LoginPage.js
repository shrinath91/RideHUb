import React, { useReducer, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  // Initial object
  const init = {
    username: "",
    password: "",
  };
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const navigate = useNavigate();

  // Dispatch to modify info object
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
          if (obj.status === 0) {
            setMsg("Request not approved");
          } else {
            localStorage.setItem("loggedin", JSON.stringify(obj));
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

  const handleCancel = () => {
    // Reset form fields and message
    dispatch({ type: "reset" });
    setMsg("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            RideHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/driver_register">
                  Register Driver
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/passenger_registration">
                  Register Passenger
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="shadow-lg p-4 m-5" style={{ width: "30rem" }}>
          <h1 className="d-flex justify-content-center text-success mb-3">Login</h1>
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={info.username}
                onChange={(e) =>
                  dispatch({ type: "update", fld: "username", val: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={info.password}
                onChange={(e) =>
                  dispatch({ type: "update", fld: "password", val: e.target.value })
                }
              />
            </div>
            <button type="submit" className="form-control btn btn-primary btn-block mt-3 ">
              Login
            </button>
            <button type="button" className="form-control btn btn-secondary btn-block mt-3 " onClick={handleCancel}>
              Reset
            </button>
            
            {msg && (
  <div className="d-flex justify-content-center align-items-center text-danger mt-3">
    {msg}
  </div>
)}

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


// import React, { useReducer, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function LoginPage() {
//   // Initial object
//   const init = {
//     username: "",
//     password: "",
//   };
//   // Reducer function
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.fld]: action.val };
//       case "reset":
//         return init;
//       default:
//         return state;
//     }
//   };

//   const navigate = useNavigate();

//   // Dispatch to modify info object
//   const [info, dispatch] = useReducer(reducer, init);
//   const [msg, setMsg] = useState("");

//   const sendData = (e) => {
//     e.preventDefault();
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };
//     fetch("http://localhost:8080/verifyLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.text();
//         } else {
//           throw new Error("Service Error");
//         }
//       })
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           setMsg("Account not found");
//         } else {
//           if (obj.id_approved === false) {
//             setMsg("Request not approved");
//           } else {
//             localStorage.setItem("loggedin", JSON.stringify(obj));
//             console.log(obj.role_id);
//             if (obj.role_id.role_id === 1) {
//               navigate("/admin_home");
//             } else if (obj.role_id.role_id === 2) {
//               navigate("/driver_home");
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/passenger_home");
//             }
//           }
//         }
//       })
//       .catch((error) => {
//         navigate("/serverError");
//       });
//   };

//   const handleCancel = () => {
//     // Reset form fields and message
//     dispatch({ type: "reset" });
//     setMsg("");
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             RideHub
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/driver_register">
//                   Register Driver
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/passenger_register">
//                   Register Passenger
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div className="shadow-lg p-4 m-5" style={{ width: "30rem" }}>
//           <h1 className="d-flex justify-content-center text-success mb-3">Login</h1>
//           <form onSubmit={sendData}>
//             <div className="form-group">
//               <label htmlFor="username"><b>Username</b></label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 className="form-control"
//                 value={info.username}
//                 onChange={(e) =>
//                   dispatch({ type: "update", fld: "username", val: e.target.value })
//                 }
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password"><b>Password</b></label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="form-control"
//                 value={info.password}
//                 onChange={(e) =>
//                   dispatch({ type: "update", fld: "password", val: e.target.value })
//                 }
//               />
//             </div>
//             <button type="submit" className="btn btn-primary btn-block mt-3">
//               Submit
//             </button>
//             <button type="button" className="btn btn-secondary btn-block mt-2" onClick={handleCancel}>
//               Cancel
//             </button>
//             {msg && <div className="text-danger mt-3">{msg}</div>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
