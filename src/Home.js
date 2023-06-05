import React,{ useState, useEffect } from 'react'

import { Link, useLocation, useNavigate } from "react-router-dom";
import Movie from './components/Movie';

export let signup=false;
export let signIN=false;
export let signOut=false;
function Home() {

    const [displayusername, displayusernameupdate] = useState('');

    const [showmenu, showmenuupdateupdate] = useState(false);

    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
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
    
    return (<>

        <div>
            {showmenu ?(
                <div className="header">

                    <h1 >Welcome {displayusername}</h1>
                    <Movie/>
                </div>):
                ( <>
                    <Link to='/login'>Sign in</Link>
                    <Link to='/regester'>sign out</Link>
                </>)
                
            }
        </div>
    );

    {/* {
        signIN ===true && signup===true?(<Link to="/login" onClick={()=>signOut=true}>sign out</Link>):
        (<>
        <Link to="/regestir" onClick={()=>signup=true}>sign up</Link>
    <Link to="/login" onClick={()=>signup===true?signIN=true:null}>sign in</Link></>
    )
    
    }  */}
    
    
    </>
    )
    
}
export default Home