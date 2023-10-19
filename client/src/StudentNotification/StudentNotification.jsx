import React from "react";
import "./StudentNotification.css";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
function StudentNotification()
{
  const notificationCards = document.querySelectorAll('.notification-card');

  const onDismissALl=(event)=>
  {
    notificationCards.forEach(card => {
      card.classList.add('display-none');
    });
    const row = document.querySelector('.notification-container');
    const message = document.createElement('h4');
    message.classList.add('text-center');
    message.innerHTML = 'All caught up!';
    row.appendChild(message);
  }
    return(
          <>
          <Navbar></Navbar>
          <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
      <Sidebar/>
      <div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:200,maxHeight:1000,minHeight:"21%"}}>    
      
          <div class="rowClass notification-container">
  <h2 class="text-center">My Notifications</h2>
  <p class="dismiss text-right"><a id="dismiss-all" href="#" onClick={onDismissALl}>Dimiss All</a></p>
  <div class="card notification-card notification-invitation">
    <div class="card-body">
      <table style={{width:"100%"}}>
        <tr>
          <td style={{width:"75%"}}><div class="card-title"><b>Oracle</b> is coming for campus drive</div></td>
          <td style={{width:"25%"}}>
            <a href="#" class="btn btn-primary" style={{marginRight:10}}>View</a>
            <a href="#" class="btn btn-danger dismiss-notification">Dismiss</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  <div class="card notification-card notification-warning">
    <div class="card-body">
       <table style={{width:"100%"}}>
        <tr>
          <td style={{width:"75%"}}><div class="card-title">Your deadline for '<b>Windowmaker</b>' form submission has exceeded its budget</div></td>
          <td style={{width:"25%"}}>
            <a href="#" class="btn btn-primary" style={{marginRight:10}}>View</a>
            <a href="#" class="btn btn-danger dismiss-notification">Dismiss</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  <div class="card notification-card notification-danger">
    <div class="card-body">
       <table style={{width:"100%"}}>
        <tr>
          <td style={{width:"75%"}}><div class="card-title">Insufficient credentials to create new category</div></td>
          <td style={{width:"25%"}}>
            <a href="#" class="btn btn-primary" style={{marginRight:10}}>View</a>
            <a href="#" class="btn btn-danger dismiss-notification">Dismiss</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  <div class="card notification-card notification-reminder">
    <div class="card-body">
       <table style={{width:"100%"}}>
        <tr>
          <td style={{width:"75%"}}><div class="card-title">You have <b>2</b> upcoming Drives(s) this week</div></td>
          <td style={{width:"25%"}}>
            <a href="#" class="btn btn-primary" style={{marginRight:10}}>View</a>
            <a href="#" class="btn btn-danger dismiss-notification">Dismiss</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  
  
</div>

</div>
</div>
</div>
          </>
    );

}


export default StudentNotification