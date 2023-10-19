import React from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
import symbol from "./Oracle-Symbol.png"
function Campusdrive()
{
    return(
         <>
         <Navbar></Navbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar/>
                 
<div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%"
}}>            

    <table class="table table-responsive  table-bordered text-center" id="tableManage">

    <thead>
    <tr style={{fontSize:18,color:"coral"}}>
          <th scope="col">Logo</th>
          <th scope="col">Company Name</th>
          <th scope="col">Location</th>
          <th scope="col">CTC</th>
          <th scope="col">Technolog</th>
          <th scope="col">10 Percantage:</th>
          <th scope="col">12th/Diploma Percantage:</th>
          <th scope="col">BE Percantage</th>
          <th scope="col">CGPA</th>
          <th scope="col">View</th>
      </tr>
      </thead>
      <tbody><tr>
        <td ><img src={symbol} style={{width:100}}/>
        </td><td>Oracle</td>
        <td>Gandhinagar</td>
        <td>20LPA</td>
        <td>Java</td>
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

export default Campusdrive;