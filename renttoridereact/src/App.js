import "./App.css";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import AboutUs from "./Components/AboutUS/AboutUs";
import DriverRegistraion from "./Components/RegistrationComponents/DriverRegistraion";
import AdminHome from "./Components/Entities/AdminPage/AdminHome";
import PassengerHome from "./Components/Entities/PassengerPage/PassengerHome";
import DriverHome from "./Components/Entities/DriverPage/DriverHome";
import PostRide from "./Components/Entities/DriverPage/PostRide";
import PassengerRegistration from "./Components/RegistrationComponents/PassengerRegistration";
import ViewRides from "./Components/Entities/PassengerPage/ViewRide";
import ServerErrorPage from "./Components/ErrorPage/ServerErrorPage";
import LoginPage from "./Components/LoginLogout/LoginPage";
import MyRide from "./Components/Entities/DriverPage/myRide";
import GetAllPassengers from "./Components/Entities/AdminPage/GetAllPassengers";
import GetAllDriver from "./Components/Entities/AdminPage/GetAllDriver";
import Navbar
 from "./Components/NavLink/Navbar";
import HomePage from "./Components/NavLink/HomePage";
import BookRide from "./Components/Entities/PassengerPage/BookRide";
import  {SearchRide}  from "./Components/Entities/PassengerPage/SearchRide";
import OldRides from "./Components/Entities/PassengerPage/OldRides";
import ShowAllTransactions from "./Components/Entities/AdminPage/ShowAllTransactions";

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/navbar" element={<Navbar />}></Route>
        <Route path="/navlink" element={<NavLink />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<HomePage />}></Route>
        <Route path="/driver_register" element={<DriverRegistraion />}></Route>
        <Route path="/admin_home" element={<AdminHome />}></Route>
        <Route path="/passenger_home" element={<PassengerHome />}></Route>
        <Route path="/driver_home" element={<DriverHome />}></Route>
        <Route path="/postRides" element={<PostRide />}></Route>
        <Route path="/passenger_registration" element={<PassengerRegistration/>}></Route>
        <Route path="/serverError" element={<ServerErrorPage/>}></Route>
        <Route path="/viewRides" element={<ViewRides/>}></Route>
        <Route path="/myRide" element={<MyRide/>}></Route>
        <Route path="/GetAllPassengers" element={<GetAllPassengers/>}></Route>
        <Route path="/GetAllDriver" element={<GetAllDriver/>}></Route>
        <Route path="/searchRide" element={<SearchRide/>}></Route>
        <Route path="/bookride" element={<BookRide/>}></Route>
        <Route path="/oldRides" element={<OldRides/>}></Route>
        <Route path="/ShowAllTransactions" element={<ShowAllTransactions/>}></Route>
      </Routes>
    </div>
  );
}

export default App;


