import React from 'react';
import Navbar from './TnpNavbar';
import Sidebar from './TnpSidebar';
import Dashboard from './TnpDashboard'; 
function TnpFinalView(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard></Dashboard>
                 
             </div>
            </div>  
        </div>  
        );
    }
  
export default TnpFinalView;