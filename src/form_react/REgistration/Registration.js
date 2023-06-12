import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
//import { signIN, signup } from '../../Home'
import {  Container, Form, Toast } from 'react-bootstrap'
function Registration() {
    
    const api="https://productdp-aksv.vercel.app/user"
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [pass,setPassword]=useState("")
    const [email,setEmail]=useState("")
    let ErrorMsg=null
    let [validate,setvalidate]=useState(true)
    const Navigate = useNavigate()

    const IsValide=()=>{
        let process =true;
        ErrorMsg="please Enter "
        if (id === null || id ===''){
            ErrorMsg+="Username "
            
            process=false
        }
        if (name === null || name ===''){
            ErrorMsg+="FullName "
            process=false
            
        }
        if (email === null || email ===''){
            ErrorMsg+="email "
            process=false
        
        }
        if (pass === null || pass ===''){
            ErrorMsg+="Password "
            process=false
        }
        if (!process){
            console.log('warning '+ErrorMsg);
            }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {

            }else{
                process=false;
                console.log("failed email ");
                
            }
        }
        return process;
    }
    
    let user=[];
    const registerhandel=(e)=>{
        e.preventDefault();
       
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
            console.log("upload and data posted");
            Navigate('/login')
            
        }).catch((err)=>{
            console.log(" failed ubload and data unposted");
        }) 
    }}

    

  return (<> 
    
    <Container className="log-page"> 
        <h1 className='py-5' >Register</h1>
        <Form  onSubmit={registerhandel}>
        {
        IsValide()===false?
        (<Toast className="d-inline-block m-1" bg={`Danger`.toLowerCase()} key={1}>
        <Toast.Body className="Danger"></Toast.Body>
        </Toast>):(<Toast className="d-inline-block m-1" bg={`Success`.toLowerCase()} key={1}>
        <Toast.Body className="Success"></Toast.Body>
        </Toast>)     
    }
        <Form.Group className="mb-3" controlId={`formBasicname`}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control  type='text'  onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicUser`}>
                <Form.Label>User Name</Form.Label>
                <Form.Control  type='text'  onChange={(e)=>setId(e.target.value)} placeholder="Enter User" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicemail`}>
                <Form.Label>email</Form.Label>
                <Form.Control type='text'  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>
        <Form.Group className="mb-3" controlId={`formBasicpassword`}>
                <Form.Label>password</Form.Label>
                <Form.Control type='password'  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>
            <input type="submit" className="log_btn" value="Register"/>
            </Form>
    </Container>
  </>
  )
}

export default Registration