import React from "react";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          RideHub
        </a>
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

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="btn btn-outline-success" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Us
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="lead">
                  "Welcome to our innovative ride-sharing platform! Powered by
                  cutting-edge technologies such as React for the frontend, and
                  a combination of Spring Boot and .NET for the backend, our
                  application promises a seamless and efficient transportation
                  experience. With MySQL handling data storage, we're able to
                  offer users a dynamic interface to easily connect, share
                  rides, and alleviate congestion. Join us as we revolutionize
                  commuting with our user-friendly, scalable solution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
