import React, { useEffect, useState } from 'react'
import {  Container, Form, Toast } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'

function Login() {
    const [checkUser,setCheckUser]=useState(true)
    const [checkPass,setCheckpass]=useState(true)
    const [id,setId]=useState("")
    const [pass,setPassword]=useState("")
    const navigate= useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
        
        clearInterval();

            },[]);
        
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("https://productdp-aksv.vercel.app/user/"+ id).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                if (Object.keys(resp).length === 0) {
                    console.log("NOt found that user name");
                    setInterval(() => {
                        setCheckUser(false)
                    }, 1000);
                } else {
                    if (resp.pass === pass) {
                        console.log("sucess");
                        sessionStorage.setItem('username',id);
                        sessionStorage.setItem('userrole',resp.role);
                        navigate('/')
                    }else{
                        setInterval(() => {
                            setCheckpass(false)
                        }, 1000);
                        console.log("pawword is missingS");
                        
                    }
                }
            })
        } 
        clearInterval();
    }
    

    const validate = () => {
        let result = true;
        if (id === '' || id === null) {
            result = false;
        }
        if (pass === '' || pass === null) {
            result = false;
            console.log("Warning")
        }
        return result;
    }

  return (<>
    {/* <Link to="/" onClick={()=>signOut=true}>sign out</Link> */}
    <Container className="log-page">
        <h1 className='py-5' >Login Page</h1>
        <Form  onSubmit={ProceedLogin}>
        
        
        {
            checkUser===false?
            (<Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1}>
            <Toast.Body className="Danger">Not valid user</Toast.Body>
            </Toast>):null     
        }
        {
            checkPass===false?
            (<Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1}>
            <Toast.Body className="Danger">Not valid Pass</Toast.Body>
            </Toast>):null     
        }
        <Form.Group className="mb-3" controlId={`formBasicname`}>
                <Form.Label>User Name</Form.Label>
                <Form.Control  type='text' onChange={(e)=>setId(e.target.value)} placeholder="Enter Name" />
            </Form.Group>
        
        <Form.Group className="mb-3" controlId={`formBasicpassword`}>
                <Form.Label>password</Form.Label>
                <Form.Control type='password'  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                </Form.Group>
                <input type="submit" className="log_btn" value="login"/> 
        </Form>
    </Container>
  </>
  )
}

export default Login

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

