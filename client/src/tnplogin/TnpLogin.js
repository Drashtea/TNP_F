import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../Navbar";
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import CustFooter from "../CustFooter";
import './css/roboto-font.css'; // Import the Roboto font CSS
import './fonts/font-awesome-5/css/fontawesome-all.min.css'; // Import the Font Awesome CSS
import './css/style.css'; // Import the main style CSS
import TnpSidebar from "../tnpdashboard/TnpSidebar";


function TnpLogin() {
	const navigate=useNavigate();
	const[email,setEmail]=useState();
	const[password,setPassword]=useState();
	const[uname,setUname]=useState();
	
	axios.defaults.withCredentials=true;
	const handleSubmit=async(e)=>{
	  e.preventDefault();
	  const data=await axios.post('http://localhost:3001/login',{email,password}).then(res=>{
		if (res.data) {
			alert("Welcome ! " + res.data.uname);
			navigate('/tnpdashboard', 'true');
			localStorage.setItem('uname', res.data.uname);
			
		  }
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
	console.log(uname);
  return (
	<>
	<Navbar></Navbar>
	  <div className="page-content">
		 <div className="form-v5-content">
			 <form className="form-detail" method="post" onSubmit={handleSubmit}>
				 <h2>TNP Login</h2>
				 
				 <div className="form-row">
					 <label htmlFor="your-email">Your Email</label>
					 <input type="text" name="email" id="email" className="input-text"  placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(evt) =>setEmail
			 (evt.target.value)}/>
		   <i className="fas fa-envelope"></i>
				 </div>
		
				 <div className="form-row">
					 <label htmlFor="password">Password</label>
					 <input type="password" name="password" id="password" className="input-text" placeholder="Your Password" onChange={(evt) =>setPassword
			 (evt.target.value)} required />
			
				 </div>
				 <div className="form-row-last">
		   <button type='submit' name="Login" className="btn btn-success" value="Login" >Login</button>
				 </div>
		
		<div className="form-row-last">Don't Have an Account?<NavLink to="/TnpRegistration">Register</NavLink></div>
		
			 </form>
	   
		 </div>
		</div>
		
	  <CustFooter></CustFooter>
	  </>
  )
}

export default TnpLogin