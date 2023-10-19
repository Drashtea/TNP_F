import React from "react";
import {Route,Routes} from "react-router-dom"
import ContactUS from "./ContactUs";
import Home from "./Home";
import Loginform from "./studentSignUp/loginform";
import TnpRegistration from './tnplogin/TnpRegistration'
import TnpLogin from "./tnplogin/TnpLogin";
import FinalView from "./dashboard/FinalView";
import TnpFinalView from "./tnpdashboard/TnpFinalView";
import RegistrationComponent from "./RegistrationComponent";
import Campusdrive from "./campusDrive/Campusdrive";
import StudentDetails from "./StudentDetails/StudentDetails";
import ErrorPage from "./ErrorPage";
import StudentSetting from "./StudentSetting/StudentSetting";
import StudentNotification from "./StudentNotification/StudentNotification";
import TnpCampusDrive from "./campusDrive/TnpCampusDrive";
import AddCompany from "./campusDrive/AddCompany";




function App()
{
   return (
    <>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route path="/contactus" element={<ContactUS />}></Route>
        <Route path="/TnpRegistration" element={<TnpRegistration/>}></Route>
        <Route path="/TnpLogin" element={<TnpLogin/>}></Route>
        <Route path="/studentlogin" element={<Loginform/>}></Route>
        <Route path="/dashboard" element={<FinalView />}></Route>
        <Route path="/tnpdashboard" element={<TnpFinalView />}></Route>
        <Route path="/registration" element={<RegistrationComponent />}></Route>
        <Route path="/campusdrive" element={<Campusdrive/>}></Route>
        <Route path="/studentdetails" element={<StudentDetails />}></Route>
        <Route path="/studentsetting" element={<StudentSetting />}></Route>
        <Route path="/studentnotification" element={<StudentNotification />}></Route>
        
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/campusdrive" element={<Campusdrive />}></Route>
        <Route path="/tnpcampusdrive" element={<TnpCampusDrive />}></Route>
      <Route path="/addcompany" element={<AddCompany />}></Route>
      </Routes>
    </>
   );
}

export default App;