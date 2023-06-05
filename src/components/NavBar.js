import React, { useState } from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function NavBar({username,show}) {
  const [active, setActiveElement] = useState(null);
  const [sign, setSign] = useState(false);
  const location = useLocation();
    // useEffect(() => {
    //     if (location.pathname === '/login' || location.pathname === '/regestir') {
    //         showmenuupdateupdate(false);
    //     } else {
    //         showmenuupdateupdate(true);
    //         let username = sessionStorage.getItem('username');
    //         if (username === '' || username === null) {
    //             usenavigate('/login');
    //         } else {
    //             displayusernameupdate(username);
    //         }
    //     }

    // }, [location] )
  
  
  return (
    <div>
    {show ?(<Navbar bg="primary" style={{"color":"#fff"}} expand="lg">
            <Container>
                <Navbar.Brand as={Link} style={{"color":"#fff","fontWeight":"700"}} to="/">SEAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="me-auto nav-color">
                    <NavLink as={Link} className={active==="home"?"active":""} onClick={()=>setActiveElement("home")} style={{"color":"#fff"}} to={'/'}>Movie</NavLink>
                    <NavLink as={Link} className={active==="about"?"active":""} onClick={()=>setActiveElement("about")} style={{"color":"#fff"}} to={'/about'}>About</NavLink>
                    <NavLink as={Link} className={active==="contact"?"active":""} onClick={()=>setActiveElement("contact")} style={{"color":"#fff"}} to={'/contact'}>Contact</NavLink>
                </Nav>
                <Nav className="ms-auto nav-color">
                    <NavLink as={Link} style={{"color":"#fff"}} to={'/login'}>Logout</NavLink>
                    <span style={{'height':"100","lineHeight":"100%"}} >{username}</span>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            ):
                ( 
                  <Navbar bg="primary" style={{"color":"#fff"}} expand="lg">
                    <Container>
                    <Navbar.Brand as={Link} style={{"color":"#fff","fontWeight":"700"}} to="/">SEAT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-color">
                        <NavLink as={Link} className={location.pathname === '/login'?"active":""} style={{"color":"#fff"}} onClick={()=>setSign(false)} to={'/login'}>Login</NavLink>
                        <NavLink as={Link} className={location.pathname === '/regestir'?"active":""} style={{"color":"#fff"}} onClick={()=>setSign(true)} to={'/regestir'}>sign Up</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
            )
                
            }
        
    </div>
  )
}

export default NavBar