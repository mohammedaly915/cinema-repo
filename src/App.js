import './App.scss';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import Registration from './form_react/REgistration/Registration';
import Login from './form_react/login/Login';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Payment from './components/Payment';
import Soon from './components/Soon';
import Success from './components/Success';

function App() {

  //this is states
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();

  //thsi is use effects
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/regestir') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location] )

  // the app and routes
  return (
    <div className="App">
    <NavBar show={showmenu} username={displayusername}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='regestir' element={<Registration/>} />
        <Route path='login' element={<Login/>} />
        <Route path="payment" element={<Payment/>}/>
        <Route path="soon" element={<Soon/>}/>
        <Route path="success" element={<Success/>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
