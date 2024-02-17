<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./Components/LoginPage";
import PassengerHome from "./Components/PassengerHome";
import DriverHome from "./Components/DriverHome";
import AdminHome from "./Components/AdminHome";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import DriverRegistraion from "./Components/DriverRegistraion";
import PostRide from "./Components/PostRide";
import { NavLink } from "react-router-dom";
import PassengerRegistration from "./Components/PassengerRegistration";
import ServerErrorPage from "./Components/ServerErrorPage";
import ViewRides from "./Components/ViewRide";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navbar />}></Route>
        <Route path="/navlink" element={<NavLink />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<Navbar />}></Route>
        <Route path="/driver_register" element={<DriverRegistraion />}></Route>
        <Route path="/admin_home" element={<AdminHome />}></Route>
        <Route path="/passenger_home" element={<PassengerHome />}></Route>
        <Route path="/driver_home" element={<DriverHome />}></Route>
        <Route path="/postRides" element={<PostRide />}></Route>
        <Route path="/passenger_registration" element={<PassengerRegistration/>}></Route>
        <Route path="/serverError" element={<ServerErrorPage/>}></Route>
        <Route path="/viewRides" element={<ViewRides/>}></Route>
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
