import React, { useEffect, useState } from 'react'
import "./sidebar.css";
import pic1 from "./user.jpg";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

  const[email,setMail]=useState('');
  const[name,setName]=useState('');

  useEffect(()=>{
    const storedMail=localStorage.getItem('email');
    const storedName=localStorage.getItem('uname');
    if(storedMail){
      setMail(storedMail);
    }
    if(storedName){
      setName(storedName);
    }else{
      storedName(email);
    }
  },[]);

//to get perticular user data
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/userDetails/${email}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [email]);



    return (
      
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
            <li class="nav-item mb-2 mt-3">
            {userData && userData.photo ? (
              <img src={require(`../profile_pictures/${userData.photo}`)} className='studentImg'/>
            ) : (
              <img src={pic1} className='studentImg'/>
            )}
            </li>
                
                <li class="nav-item mb-2 mt-3"><a class="nav-link" href="#" style={{color:"coral"}}><h3>{name}</h3></a></li>
                <li class="nav-item mb-2 "><NavLink className="nav-link text-secondary" to="/dashboard"><i class="fa fa-bars font-weight-bold"></i> <span className="ml-3 sidebar-text">Dashboard</span></NavLink></li>
                <li class="nav-item mb-2">
                    <NavLink className="nav-link text-secondary"  data-toggle="collapse" to="/registration"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
</svg><span className="ml-3 sidebar-text"> Application</span></NavLink></li>


                <li class="nav-item mb-2">
                <NavLink class="nav-link text-secondary" to='/studentnotification'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg><span className="ml-3 sidebar-text" >Notification</span></NavLink></li>

                <li class="nav-item mb-2">
                <NavLink class="nav-link text-secondary" to='/studentsetting'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg><span className="ml-3 sidebar-text"> Setting&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</span></NavLink></li>
            </ul>
       </div>
    )
}
 
export default Sidebar
