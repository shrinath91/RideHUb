import './App.css';
import { Route,Routes } from 'react-router';
import LoginPage from './Components/LoginPage';
import RegistrationForm from './Components/RegistrationForm';
import PassengerHome from './Components/PassengerHome';
import DriverHome from './Components/DriverHome';
import AdminHome from './Components/AdminHome';
import HomePage from './Components/HomePage';
function App() {
  return (
   
  <Routes>

          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationForm/>}> </Route>
          <Route path='/admin_home' element={<AdminHome/>}></Route>
          <Route path='/passenger_home' element={<PassengerHome/>}> </Route>
          <Route path='/driver_home' element={<DriverHome/>}> </Route>

    </Routes>
    
    
   
  );
}

export default App;