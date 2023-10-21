import React, { useEffect, useState } from "react";
import TnpNavbar from "../tnpdashboard/TnpNavbar";
import TnpSidebar from "../tnpdashboard/TnpSidebar";
import axios from 'axios';


function StudentDetails()
{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.post('http://localhost:3001/studentdetails').then(users=>setUsers(users.data)).catch(err=>console.log(err))
    },[]);

   
    return(
         <>
         <TnpNavbar></TnpNavbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <TnpSidebar/>
                 
<div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%"
}}>            

    <table class="table table-responsive  table-bordered text-center" id="tableManage">

    <thead>
    <tr style={{fontSize:18,color:"coral"}}>
          <th scope="col">Tnp ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Middle Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Branch</th>
          <th scope="col">Year</th> 
          <th scope="col">10 Percantage</th>
          <th scope="col">12th/Diploma Percantage</th>
          <th scope="col">BE Percantage</th>
          <th scope="col">CGPA</th>
          <th scope="col">View</th>
      </tr>
      </thead>
      <tbody>
        
      {
            users.map(user=>{
                return <tr>
                <td>1234</td>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td >{user.Branch}</td>
                <td>{user.year}</td>
                <td>{user.SSC}</td>
                <td>{user.HSC}</td>
                <td>{user.BEPERCENTAGE}</td>
                <td>{user.BECGPA}</td>
                <td>
   
        <img width='100' height='100' src={require(`../profile_pictures/${user.photo}`)}/>
    
     </td>
                <td>
                    <button class="action-type-btn border border-white"><a href="../distribute/distributeDetails.php">
                    <i class="fa fa-eye " aria-hidden="true"></i></a>
                    </button>
                </td>
               
                </tr>
            })
        }
    </tbody></table>
</div>
</div>
</div>
    </>
    );
}

export default StudentDetails;