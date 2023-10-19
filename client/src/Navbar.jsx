import React from "react";
import {NavLink} from "react-router-dom"
import pic from "./msulogo.png";
import './navbar.css';
function Navbar()
{
    return (
     <div style={{paddingBottom:"20px",paddingTop:"20px"}}>
       <img src={pic} className="logo" alt="Loading of image" />
       <table cellSpacing={0} cellPadding={0}>
        <tr>
          <td><h1 className="heading">The Maharaja Sayajirao University of Baroda</h1></td>
        </tr>
        <tr>
          <td><span>Kalabhavan,Vadodara -390001</span></td>
        </tr>
       </table>
       <ul>
      <li><NavLink to="/home">Home</NavLink></li>  
      <li><NavLink to="/contactus">Contact US</NavLink></li>
      <li><NavLink to="/TnpLogin">TNP Login</NavLink></li>
      <li><NavLink to="/studentlogin">Student Login</NavLink></li>
      </ul>
      </div>
    );
}
export default Navbar;