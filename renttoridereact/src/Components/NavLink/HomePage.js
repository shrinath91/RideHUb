
import React from 'react';
import Navbar from '../NavLink/Navbar'; // Import the Navbar component
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p>© 2024 RideHub. All rights reserved.</p>
      </Container>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div> 
      <Navbar /> {/* Use the Navbar component as the header */}
      <Container fluid>
        {/* Welcome Section */}
        <div className="jumbotron jumbotron-fluid text-center">
          <Container>
            <h1 className="display-4">Welcome to RideHub</h1>
            <p className="lead">Find your ride, book, and enjoy!</p>
          </Container>
        </div>
        {/* About Us Section */}
        <Container id="about" className="py-4">
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center mb-4">About Us</h2>
              <p>
                <h6>
                RideHub is dedicated to providing a convenient and secure platform for riders and drivers. Our mission is to empower small businesses and offer customers a seamless ride experience.
                </h6>
              </p>
            </Col>
          </Row>
          
        </Container>
        {/* Contact Us Section */}
        <Container id="contact" className="py-3">
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center mb-4">Contact Us</h2>
              <p>Have questions or need assistance? Reach out to us!</p>
              <p>Email: info@ridehub.com</p>
              <p>Phone: +1 234-567-8901</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {/* <Col md={8}>
              <img src={contactUsImage} alt="Contact Us" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Footer /> 
    </div>
  );
};

export default HomePage;
