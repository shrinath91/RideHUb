import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavLinks.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function NavLink() {
  const location = useLocation();
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top  navbar-dark bg-dark">
        <div>
          <Link className="navbar-brand" to="/">
            <i className="bi bi-heart-pulse-fill"></i> RideHub
          </Link>
        </div>

        <div>
          {location.pathname === "/login" && (
            <>
              <div class="right-block">
                <Link className="navbar-text" to="/registerpage">
                  Register !
                </Link>

              </div>
            </>
          )}
          {location.pathname === "/registerpage" && (
            <>
              <Link className="navbar-text" to="/login">
                Login
              </Link>
            </>
          )}
             {location.pathname.endsWith("Home") && (
            <>
              <Link className="navbar-text" to="/">
                Logout
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavLink;
