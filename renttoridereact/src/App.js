import './App.css';
import { Route,Routes } from 'react-router';
import LoginPage from './Components/LoginPage';
import RegistrationForm from './Components/RegistrationForm';
import PassengerHome from './Components/PassengerHome';
import DriverHome from './Components/DriverHome';
import AdminHome from './Components/AdminHome';
import HomePage from './Components/HomePage';
import DriverRegistrationForm from './Components/DriverRegistraionForm';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
function App() {
  return (

    
  <Routes>
          <Route exact path='/' element={<Navbar/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/logout' element={<Navbar/>}></Route>
          <Route path='/register' element={<RegistrationForm/>}> </Route>
          <Route path='/admin_home' element={<AdminHome/>}></Route>
          <Route path='/passenger_home' element={<PassengerHome/>}> </Route>
          <Route path='/driver_home' element={<DriverHome/>}> </Route>
          <Route path='/driverregister' element={<DriverRegistrationForm/>}> </Route>
    </Routes>
    
    
    
   
  );
}

export default App;