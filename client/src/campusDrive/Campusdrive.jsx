import React from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
import symbol from "../images/Oracle-Symbol.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Campusdrive()
{
  const activeSumbit=()=>{
    document.getElementById("sumbit").removeAttribute("disabled");
 }
 
    
    
      return (
        <>
         <Navbar></Navbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar/>
                 
<div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%",marginLeft:250
}}>      
      <div class="container mt-2">
          <div class="card">
  <div class="card-header" style={{fontSize:30}}>
    <img src={symbol} style={{width:60,height:40}}/>ORACLE
  </div>
  <div class="card-body">
    <h5 class="card-title">CTC : 5LPA</h5>
    <p class="card-text">Technology : Java,C,C++</p>
    <p class="card-text" style={{color:"red",fontSize:18}}><b>Deadline Date:4/5/23</b></p>
    <button class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#myModal1">Apply</button>
    <button  class="btn btn-primary" style={{marginLeft:50}} data-bs-toggle="modal" data-bs-target="#myModal2">Description</button>

</div>

</div>

   
        <div class="modal" id="myModal1">
          <div class="modal-dialog" style={{width:"900px"}}>
            <div class="modal-content">
              <div class="modal-header">
              <img src={symbol} style={{width:60,height:40}}/>
                  <h5 class="modal-title" id="exampleModalLabel">Oracle</h5>

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div style={{overflowY:"scroll",height:400}}>

                <h2 style={{color:"coral"}}>Job Role</h2>
                <br></br>
                <p style={{fontSize:20,fontStyle:"italic"}}><b>NOC Engineer</b></p>
                <br></br>
                <p>
As a NOC Associate with a focus on Linux and Networking, you will be part of a dynamic team
responsible for ensuring uninterrupted 24x7x365 network and IT system operations. This entry-level
position is designed for freshers who have a strong interest in Linux and Networking. Your role
includes assisting in managing team activities, responding to incidents, monitoring SLAs,
implementing new solutions, and ensuring system stability and security. You will learn to monitor
environments, perform network analysis, collaborate on server builds, and communicate effectively
with the team. Additionally, you'll contribute to maintaining vital technical documentation and
escalate critical issues for timely resolution.</p>
<br></br>
<p style={{fontSize:20,fontStyle:"italic"}}><b>IT Admin</b></p>

<br></br>

<p>
• He\She would be responsible to provide technical support to Crest Data System's
employee as well to customers.
<br></br>
• Ready to work in any shift and over the weekends as well on rotational basis.<br></br>
• Would be responsible to explore new tools\software which can be beneficial for the
organization.<br></br>
• He\She should be ready to work in any customer project and customer's requested
time zone whenever there is a requirement.<br></br>
• Ensures effective task management for smooth execution of task</p>
<form actions="">
<p style={{fontSize:20,color:"coral"}}><b>Please Select:</b></p>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={activeSumbit}/>
  <label class="form-check-label" for="flexRadioDefault1" style={{marginRight:50}}>
    <b>NOC Engineer</b>
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={activeSumbit}/>
  <label class="form-check-label" for="flexRadioDefault1">
  <b>IT Admin</b>
  </label>
  <br></br><br></br>
  <button class="btn btn-primary" disabled id="sumbit">Sumbit</button>
</div>
</form>
               </div>
             
              </div>
                
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
                
            </div>
          </div>
        </div>
        <div class="modal" id="myModal2">
          <div class="modal-dialog" style={{width:"700px"}}>
            <div class="modal-content">
              <div class="modal-header">
              <img src={symbol} style={{width:60,height:40}}/>
                  <h5 class="modal-title" id="exampleModalLabel">Oracle</h5>

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div style={{overflowY:"scroll",height:"350px",fontSize:18}}>
                <h2 style={{color:"coral",textAlign:"center"}}>Description</h2>
                <br></br>
                <h3 style={{textDecoration:"underline",textAlign:"center"}}>Greetings from the Training and placement cell!</h3>
                <p style={{textAlign:"center"}}>Oracle Conducting placement drive</p>
                <br></br>
                <p><b>Package Offered	(LPA) :</b>4.5</p>
                <p><b>Technology :</b>java,c,c++</p>
                <p><b>Location :</b>Ahmedabad </p>
                <p><b>Intenship Duration(Month) :</b>6</p>
                <p><b>Internship stipend(per month):</b>8000</p>
                <p><b>Bond :</b>1 year including internship time</p>
                <p><b>Joining Bonus :</b>1 LPA</p>
                <p><b>Accommodation :</b>Not</p>
                 <br></br>
                <h3 style={{color:"coral"}}>Elligibility criteria</h3>
                <br></br>
                <p><b>10 Percentage :</b>Above 60%</p>
                <p><b>12 Percentage :</b>Above 60%</p>
                <p><b>BE Percentage :</b>Above 60%</p>
                <p><b>BE CGPA :</b>Above 7</p>
                <br></br>
                <h3 style={{color:"coral"}}>More About Company</h3>
               <a href="https://www.oracle.com/in/">https://www.oracle.com/in/</a>
               <br></br><br></br>
                 <h3 style={{color:"green"}}>Mode of Drive:Offline</h3>
              </div>
            
               </div>
                
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
                
            </div>
          </div>
        </div>
   
      </div>
    
     
      </div>
      </div>
      </div>
      </>
      );

}
export default Campusdrive;