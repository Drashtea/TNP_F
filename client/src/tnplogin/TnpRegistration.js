import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../Navbar";
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import CustFooter from "../CustFooter";
import './css/roboto-font.css'; // Import the Roboto font CSS
import './fonts/font-awesome-5/css/fontawesome-all.min.css'; // Import the Font Awesome CSS
import './css/style.css'; // Import the main style CSS


const TnpRegistration=() => {
	const navigate=useNavigate();

  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();
  const[password,setPassword]=useState();
  const[cpassword,setCpassword]=useState();
  
  const handleSubmit=async(e)=>{
	e.preventDefault();
	const data=await axios.post('http://localhost:3001/register',{name,email,phone,password,cpassword}).then(res=>{
		alert(res.status);
		navigate('/tnpdashboard','true');
	}).catch(err=>alert(err))
  }


   return(
   <>
   <Navbar></Navbar>
  
     <div className="page-content">
		<div className="form-v5-content">
			<form className="form-detail" method="post" onSubmit={handleSubmit}>
				<h2>Register Account Form</h2>
				<div className="form-row">
					<label htmlFor="Phone">Name</label>
					<input type="Phone" name="name" id="name" className="input-text"  placeholder="phone" required onChange={(evt) =>setName
            (evt.target.value)}/>
					<i className="fas fa-phone"></i>
				</div>
				<div className="form-row">
					<label htmlFor="your-email">Your Email</label>
					<input type="text" name="email" id="email" className="input-text"  placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(evt) =>setEmail
            (evt.target.value)}/>
          <i className="fas fa-envelope"></i>
				</div>
        <div className="form-row">
					<label htmlFor="Phone">Phone</label>
					<input type="Phone" name="phone" id="phone" className="input-text"  placeholder="phone" required onChange={(evt) =>setPhone
            (evt.target.value)}/>
					<i className="fas fa-phone"></i>
				</div>
				<div className="form-row">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" className="input-text" placeholder="Your Password" onChange={(evt) =>setPassword
            (evt.target.value)} required />
				</div>
        <div className="form-row">
					<label htmlFor="cpassword">Confirm Password</label>
					<input type="password" name="cpassword" id="cpassword" className="input-text" placeholder="Confirm Password" onChange={(evt) =>setCpassword
            (evt.target.value)} required/>
				</div>
				<div className="form-row-last">
          <button type='submit' name="register" className="register" value="Register" >Register</button>
				</div>
       
       <div className="form-row-last">Already Have an Account?<NavLink to="/TNPLogin">Login</NavLink></div>
			</form>
      
		</div>
	   </div>
     <CustFooter></CustFooter>
     </>
 )
}

export default TnpRegistration;