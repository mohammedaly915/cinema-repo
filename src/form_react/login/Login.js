import React, { useEffect, useState } from 'react'
import {  Container, Form, Toast } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
//import { signOut } from '../../Home'

function Login() {
    useEffect(()=>{
        sessionStorage.clear();
            },[]);
    const [id,setId]=useState("")
    const [pass,setPassword]=useState("")
    const navigate= useNavigate();
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:9000/user/" + id).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                if (Object.keys(resp).length === 0) {
                    console.log("NOt found that user name");
                } else {
                    if (resp.pass === pass) {
                        console.log("sucess");
                        sessionStorage.setItem('username',id);
                        sessionStorage.setItem('userrole',resp.role);
                        navigate('/')
                    }else{
                        console.log("pawword is missingS");
                    }
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    // const ProceedLoginusingAPI = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         ///implentation
    //         // console.log('proceed');
    //         let inputobj={"username": id,
    //         "password": pass};
    //         fetch("https://localhost:44308/User/Authenticate",{
    //             method:'POST',
    //             headers:{'content-type':'application/json'},
    //             body:JSON.stringify(inputobj)
    //         }).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 <Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1} >
    //                     <Toast.Body className="Danger">Hello, world! This is a toast message.</Toast.Body>
    //                 </Toast>
    //             }else{
    //                 <Toast className="d-inline-block m-1" bg={`Success`.toLowerCase()} key={1} >
    //                 <Toast.Body className="Success">Hello, world! This is a toast message.</Toast.Body>
    //                 </Toast>
    //                 sessionStorage.setItem('username',id);
    //                 sessionStorage.setItem('jwttoken',resp.jwtToken);
    //                //navigate('/')
    //             }
    //             /* other */
    //             // if (Object.keys(resp).length === 0) {
    //             //     toast.error('Please Enter valid username');
    //             // } else {
    //             //     if (resp.password === password) {
    //             //         toast.success('Success');
    //             //         sessionStorage.setItem('username',username);
    //             //         usenavigate('/')
    //             //     }else{
    //             //         toast.error('Please Enter valid credentials');
    //             //     }
    //             // }
    //         }).catch((err) => {
    //             <Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1} >
    //                     <Toast.Body className="Danger">Hello, world! This is a toast message.</Toast.Body>
    //                 </Toast>
    //         });
    //     }
    // }

    const validate = () => {
        let result = true;
        if (id === '' || id === null) {
            result = false;
            <Toast className="d-inline-block m-1" bg={`Warning`.toLowerCase()} key={1} >
                <Toast.Body className="Warning">Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        }
        if (pass === '' || pass === null) {
            result = false;
            console.log("Warning")
        }
        return result;
    }

  return (<>
    {/* <Link to="/" onClick={()=>signOut=true}>sign out</Link> */}
    <Container>
        <h1 className='py-5' >Login Page</h1>
        <Form  onSubmit={ProceedLogin}>
        <Form.Group className="mb-3" controlId={`formBasicname`}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control required type='text' onChange={(e)=>setId(e.target.value)} placeholder="Enter Name" />
            </Form.Group>
        
        <Form.Group className="mb-3" controlId={`formBasicpassword`}>
                <Form.Label>password</Form.Label>
                <Form.Control type='password' required onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>
            {//email}
            }
            <input type="submit" style={{backgroundColor: 'blue',color: 'white',padding: '10px',borderRadius: '5px',border: 'none', cursor: 'pointer'}} value="login"/> 
            {//submit}
            }
            {/* <Link to='/regestir'>
                <button style={{backgroundColor: 'blue',color: 'white',padding: '10px',borderRadius: '5px',border: 'none', cursor: 'pointer'}}>Sign UP</button>
            </Link> */}
            </Form>
    </Container>
  </>
  )
}

export default Login
{/*  <Form.Group className="mb-3" controlId={`formBasicemail`}>
                <Form.Label>email</Form.Label>
                <Form.Control type='email' required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group> */ }

{/* <Link  type="submit">
                <button style={{backgroundColor: 'Red',color: 'white',padding: '10px',borderRadius: '5px',border: 'none', cursor: 'pointer'}}>Login</button>
            </Link> */}