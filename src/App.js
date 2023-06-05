import './App.scss';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import Registration from './form_react/REgistration/Registration';
import Login from './form_react/login/Login';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Payment from './components/Payment';
function App() {
  const [displayusername, displayusernameupdate] = useState('');

    const [showmenu, showmenuupdateupdate] = useState(false);

    const usenavigate = useNavigate();
    const location = useLocation();
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
  return (
    <div className="App">
    <NavBar show={showmenu} username={displayusername}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='regestir' element={<Registration/>} />
        <Route path='login' element={<Login/>} />
        <Route path="payment" element={<Payment/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
