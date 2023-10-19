import React from "react";
import TnpNavbar from "../tnpdashboard/TnpNavbar";
import TnpSidebar from "../tnpdashboard/TnpSidebar";
import symbol from "./Oracle-Symbol.png"
import { NavLink } from "react-router-dom";
function TnpCampusDrive()
{
    return(
         <>
         <TnpNavbar></TnpNavbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <TnpSidebar/>
                 
<div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%",marginLeft:"20%"
}}>            
      <div class="input-group row" style={{marginTop:30}}>
     <div className="col-10">   
      <div class="form-outline">
      <input id="search-focus" type="search" class="form-control" style={{width:"90%",float:"left"}}/><button type="button" class="btn btn-primary" style={{width:"10%",height:40}}>
      <i class="fas fa-search"></i>
     </button>
     
      <label class="form-label" for="form1">Search</label>
      </div>
         </div>    
         <div className="col-2">
         <button type="button" class="btn btn-primary" id="add-item-btn" > <NavLink  to="/addcompany" style={{color:"white",textDecoration:"none"}}> Add  &nbsp;&nbsp;<i class="fa fa-plus" aria-hidden="true"></i></NavLink></button>
         </div>   
    </div>

    <table class="table table-responsive  table-bordered text-center" id="tableManage">

    <thead>
    <tr style={{fontSize:18}}>
          <th scope="col" style={{color:"coral"}}>Logo</th>
          <th scope="col" style={{color:"coral"}}>Company Name</th>
          <th scope="col" style={{color:"coral"}}>Location</th>
          <th scope="col" style={{color:"coral"}}>CTC</th>
          <th scope="col" style={{color:"coral"}}>Technolog</th>
          <th scope="col" style={{color:"coral"}}>Bond</th>
          <th scope="col" style={{color:"coral"}}>Accommodation</th>
          <th scope="col" style={{color:"coral"}}>Joining Bonus</th>
          <th scope="col" style={{color:"coral"}}>10 Percantage:</th>
          <th scope="col" style={{color:"coral"}}>12th/Diploma Percantage:</th>
          <th scope="col" style={{color:"coral"}}>BE Percantage</th>
          <th scope="col" style={{color:"coral"}}>CGPA</th>
          <th scope="col" style={{color:"coral"}}>View</th>
      </tr>
      </thead>
      <tbody><tr>
        <td ><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        <tr>
        <td ><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        
        <tr>
        <td><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        <tr>
        <td><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        <tr>
        <td><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        <tr>
        <td><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        <tr>
        <td><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>70% or above</td>
        <td>7 or above</td>
        <td>
            <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
            <i class="fa fa-eye " aria-hidden="true"></i></a>
            </button>

        </td>
        </tr>
        

      

    </tbody></table>




</div>
</div>
</div>
            

         </>
    );
}

export default TnpCampusDrive;