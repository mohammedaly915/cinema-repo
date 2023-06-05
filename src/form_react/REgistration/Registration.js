import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { signIN, signup } from '../../Home'
import {  Container, Form, Toast } from 'react-bootstrap'
function Registration() {
    
    const api="http://localhost:9000/user"
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [pass,setPassword]=useState("")
    const [email,setEmail]=useState("")
    //const Navigte = useNavigate()

    const IsValide=()=>{
        let proCess =true;
        let ErrorMsg="please Enter "
        if (id === null || id ===''){
            ErrorMsg+="Username"
            proCess=false
        }
        if (name === null || name ===''){
            ErrorMsg+="Name"
            proCess=false
        }
        if (email === null || email ===''){
            ErrorMsg+="email"
            proCess=false
        }
        if (pass === null || pass ===''){
            ErrorMsg+="Password"
            proCess=false
        }
        if (!proCess){
            console.log('warning'+ErrorMsg);
        
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {

            }else{
                proCess=false;
                console.log("failed email");
                
            }
        }
        return proCess;
    }

    let user=[];
    const registerhandel=(e)=>{
        e.preventDefault();
        (<Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1}>
        <Toast.Body className="Danger">Hello, world! This is a toast message.</Toast.Body>
        </Toast>)
        let data={id,name,pass,email}
        console.log(data);
        user.push(data)
        console.log(user);
        if(IsValide()){
        fetch(api,{
        method:"post",
        headers:{'content-type':' application/json'},
        body:JSON.stringify(data)
    }).then((res)=>{
        console.log("upload");
        
    }).catch((err)=>{
        console.log("failed ublosd");
        <Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1}>
        <Toast.Body className="Danger">Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    }) 
    }}

    
      //()=>signup===true?signIN=true:null
  return (<> 
    
    <Container>
        <h1 className='py-5' >Register</h1>
        <Form  onSubmit={registerhandel}>
        <Form.Group className="mb-3" controlId={`formBasicname`}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control  type='text' required onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicUser`}>
                <Form.Label>User Name</Form.Label>
                <Form.Control  type='text' required onChange={(e)=>setId(e.target.value)} placeholder="Enter User" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicemail`}>
                <Form.Label>email</Form.Label>
                <Form.Control type='email' required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicpassword`}>
                <Form.Label>password</Form.Label>
                <Form.Control type='password'  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>
            <input type="submit" value="Register"/>
            </Form>
    </Container>
  </>
  )
}

export default Registration