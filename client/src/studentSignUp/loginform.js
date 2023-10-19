import React, { useState } from "react";
import "./loginform.css"
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import CustFooter from "../CustFooter";
import * as Components from './Components';
import axios from 'axios';

const Loginform =() => {
  const [signIn, toggle] = React.useState(true);
  const navigate=useNavigate();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();
  const[password,setPassword]=useState();
  const[cpassword,setCpassword]=useState();


  //variable for login
  let [lemail,setLemail]=useState();
  let [lpassword,setLpassword]=useState();

    axios.defaults.withCredentials=true;
	const handleSubmit=async(e)=>{
	e.preventDefault();
	const data=await axios.post('http://localhost:3001/register',{name,email,phone,password,cpassword}).then(res=>{
		alert(res.status);
		navigate('/dashboard','true');
	}).catch(err=>alert(err))
  }
 
  const handleSubmitLogin=async(e)=>{
    e.preventDefault();
    const data=await axios.post('http://localhost:3001/Studentlogin',{lemail,lpassword}).then(res=>{
        if(res.data==='success')
        {
        alert(res.data);
        navigate('/dashboard','true');}
        else
        {
          setPassword=()=>{
              password="";
          };
          alert(res.data);
        }
    }).catch((err)=>{
        document.getElementById('password').value="";
        alert("Invalid Credentials");
    })
  }


      return(
      <>
      <Navbar></Navbar>
      <div className="page"> 
        <Components.Container>
            <Components.SignUpContainer signinin={signIn}>
                <Components.Form onSubmit={handleSubmit}>
                    <h5>Create Account</h5>
                    <Components.Input type='text' placeholder='Name' onChange={(evt) =>setName
            (evt.target.value)}/>
                    
                   <Components.Input type='email' placeholder='Email' onChange={(evt) =>setEmail
            (evt.target.value)}/>
             <Components.Input type='text' placeholder='Phone' onChange={(evt) =>setPhone
            (evt.target.value)}/>
                    <Components.Input type='password'  placeholder='Password' onChange={(evt) =>setPassword
            (evt.target.value)}/>
              <Components.Input type='password' placeholder='confirm Password' onChange={(evt) =>setCpassword
            (evt.target.value)}/>
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleSubmitLogin}>
                     <Components.Title>Sign in</Components.Title>
                     
                     <Components.Input type='email' placeholder='Email' onChange={(evt) =>setLemail
			 (evt.target.value)}/>
                     <Components.Input type='password' id='password' placeholder='Password' onChange={(evt) =>setLpassword
			 (evt.target.value)}/>
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Student SignUp</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Student Login</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
        </div>
        <CustFooter></CustFooter>
        </>
    )
}

export default Loginform