import React from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
import symbol from "./Oracle-Symbol.png";
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
class Campusdrive extends React.Component
{
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isApply:false
    }
    
  }
  openBox = () => {
    this.setState({
      isOpen: true
    })
  }
  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }
  openApplyBox=()=>{
    this.setState({
      isApply:true
    })
  }
  closeApplyBox=()=>{
    this.setState({
      isApply:false
    })
  }
  activeSumbit=()=>{
     document.getElementById("sumbit").removeAttribute("disabled")
  }
  render() {
    return(
         <>
         <Navbar></Navbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar/>
                 
<div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%",marginLeft:"20%"
}}>            
    <div class="card">
  <div class="card-header" style={{fontSize:30}}>
    <img src={symbol} style={{width:50,height:40}}/>ORACLE
  </div>
  <div class="card-body">
    <h5 class="card-title">CTC : 5LPA</h5>
    <p class="card-text">Technology : Java,C,C++</p>
    <a href="#" class="btn btn-success" onClick={this.openApplyBox}>Apply</a>
    {this.state.isApply && (
          <>
            <ReactDialogBox
              closeBox={this.closeApplyBox}
              modalWidth='50%'
              headerBackgroundColor='coral'
              headerTextColor='white'
              headerHeight='70px'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='300px'
              headerText='Oracle'
              bodyOverflow='scroll'
            >
              
              <div style={{overflowY:"scroll",height:"250px"}}>
                <h3 style={{color:"coral"}}>Job Role</h3>
                <br></br>
                <h4>NOC Engineer</h4>
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

<h4>IT Admin</h4>
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

<p style={{fontSize:20,color:"coral"}}>Please Select:</p>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={this.activeSumbit}/>
  <label class="form-check-label" for="flexRadioDefault1" style={{marginRight:50}}>
    NOC Engineer
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={this.activeSumbit}/>
  <label class="form-check-label" for="flexRadioDefault1">
  IT Admin
  </label>
  <br></br><br></br>
  <button class="btn btn-primary" disabled id="sumbit">Sumbit</button>

</div>
               </div>
              
            </ReactDialogBox>
          </>
        )}
    
    {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='50%'
              headerBackgroundColor='coral'
              headerTextColor='white'
              headerHeight='70px'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='400px'
              headerText='Oracle'
              bodyOverflow='scroll'
            >
              
              <div style={{overflowY:"scroll",height:"350px",fontSize:18}}>
                <form action="">
                <h2 style={{color:"coral",textAlign:"center"}}>Description</h2>
                <br></br>
                <h4 style={{textDecoration:"underline",textAlign:"center"}}>Greetings from the Training and placement cell!</h4>
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
                 </form>
              </div>
              
            </ReactDialogBox>
          </>
        )}
    <a href="#" class="btn btn-primary" style={{marginLeft:50}} onClick={this.openBox}>Description</a>

  </div>
  
</div>

</div>
</div>
</div>
            

         </>
    );
}
}
export default Campusdrive;