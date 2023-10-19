import React from "react"; 
import { useState } from "react";
import TnpNavbar from "../tnpdashboard/TnpNavbar";
import TnpSidebar from "../tnpdashboard/TnpSidebar";
import "./AddCompany.css";
function AddCompany()
{
  const [_10PerError, set10PerError] = useState(''); 
  const [_12PerError, set12PerError] = useState(''); 
  const [bePerError, setBEPerError] = useState(''); 
  const [cgpaError, setCgpaError] = useState(''); 

   const [serviceList, setServiceList] = useState([{ service: "" }]);

   const handleServiceChange = (e, index) => {
     const { name, value } = e.target;
     const list = [...serviceList];
     list[index][name] = value;
     setServiceList(list);
   };
 
   const handleServiceRemove = (index) => {
     const list = [...serviceList];
     list.splice(index, 1);
     setServiceList(list);
   };
 
   const handleServiceAdd = () => {
     setServiceList([...serviceList, { service: "" }]);
   };
 
   return(
     <>
       <TnpNavbar></TnpNavbar>
            <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
            <TnpSidebar/>
                 
           <div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:800,maxHeight:1000,minHeight:"21%",marginLeft:"20%"}}> 
           <div style={{border:"1px solid #dcdcdc "}}>
           <div style={{backgroundColor:"coral",color:"white"}}>
           <p style={{textAlign:"center",fontSize:30}}>Add New Comapny</p>
         
           </div>
           
           <form style={{marginTop:50}}>
            <div className="row">
             <div className="col-8">
                <h3 style={{textAlign:"center",marginBottom:50,color:"#1e90ff"}}>Company Details</h3> 
                <div className="form-group row container-fluid">
                <label className="col">Company Logo :</label>
                <input className="form-control col" type="file" accept="image/jpeg,image/jpg,image/png" required style={{marginRight:100}}/>
             </div>
              
             <div className="form-group row container-fluid">
                <label className="col">Company name :</label>
                <input className="form-control col" type="text" id="comanyName" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Location :</label>
                <input className="form-control col" type="text" id="comanyLocation" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">CTC(LPA) :</label>
                <input className="form-control col" type="number" id="comanyCTC" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Technology :</label>
                <textarea className="form-control col" id="comanyTechnology" rows={4} style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Bond :</label>
                <input type="text" className="form-control col" id="comanyBond" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Accommodation  :</label>
                <textarea className="form-control col" id="comanyAccommodation" style={{marginRight:100}} required/>
             </div>
             
             <div className="form-group row container-fluid">
                <label className="col">Internship Duration(Month):</label>
                <input className="form-control col" type="number" id="internshipDuration" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Internship Stipend :</label>
                <input className="form-control col" type="number" id="internshipStipend" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col">Joining Bonus :</label>
                <input className="form-control col" type="number" id="joiningBonus" style={{marginRight:100}} required/>
             </div>
             <div className="form-group row container-fluid">
                <label className="col-5">Drive Mode :</label>
                <div class="form-check col-2" >
                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="driveOffline" />
                     <label class="form-check-label">
                       Offline
                       </label>
                </div>
            <div class="form-check col-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="driveOnline" />
                <label class="form-check-label">
                   Online
                </label>
            </div>
            <div class="form-check col-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="driveNotKnown"   checked />
                <label class="form-check-label">
                   Not Known
                </label>
            </div>
             
             </div>

             <div className="form-group row container-fluid">
                <label className="col">More info :</label>
                <textarea className="form-control col"  id="joiningBonus" rows={4} style={{marginRight:100}} required/>
             </div>
           
             </div>
             <div className="col">
             <h3 style={{textAlign:"center",marginBottom:50,color:"#1e90ff"}}>Eligibility Criteria</h3>   
             <div className="form-group row container-fluid">
                <label className="col">10 Percentage :</label>
                <input className="form-control col" type="number" id="_10Per" style={{marginRight:100}} required onChange={(e)=>{
                                if(e.target.value>0 && e.target.value<100)
                                {
                                    set10PerError('')
                                }
                                else{
                                   set10PerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
                 <span style={{ fontWeight: 'bold', color: 'red', }}>{_10PerError}</span>
               
             </div>
             <div className="form-group row container-fluid">
                <label className="col">12/Diploma Percentage :</label>
                <input className="form-control col" type="number" id="12orDiplomaPer" style={{marginRight:100}} required onChange={(e)=>{
                                if(e.target.value>0 && e.target.value<100)
                                {
                                    set12PerError('')
                                }
                                else{
                                   set12PerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
                <span style={{ fontWeight: 'bold', color: 'red', }}>{_12PerError}</span>             
             </div>
             <div className="form-group row container-fluid">
                <label className="col">BE Percentage :</label>
                <input className="form-control col" type="number" id="bePer" style={{marginRight:100}} required onChange={(e)=>{
                                if(e.target.value>0 && e.target.value<100)
                                {
                                    setBEPerError('')
                                }
                                else{
                                   setBEPerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
               <span style={{ fontWeight: 'bold', color: 'red', }}>{bePerError}</span>

             </div>
             <div className="form-group row container-fluid">
                <label className="col">BE CGPA (out of 10) :</label>
                <input className="form-control col" type="number" id="beCGPA" style={{marginRight:100}} required onChange={(e)=>{
                                if(e.target.value>0 && e.target.value<10)
                                {
                                    setCgpaError('')
                                }
                                else{
                                   setCgpaError('CGPA should be between 0 and 10')
                                }
                              }
                                }/>
                <span style={{ fontWeight: 'bold', color: 'red', }}>{cgpaError}</span>
               
             </div>
           
             </div>
             </div>
                   <div className="form-field form-group row">
        <label htmlFor="job role" style={{fontSize:30,textAlign:"center",marginTop:30,color:"#1e90ff"}} >Job Role</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services" style={{marginTop:50}}>
            <div className="first-division">
            <label className="container-fluid" style={{marginTop:20}}>Job Name :</label>
                  


              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                style={{marginLeft:15}}
                required
              />
               <label className="container-fluid" style={{marginTop:20}}>Job Description :</label>
               <textarea  className="form-control container-fluid" rows={12}  style={{marginLeft:15}} required/>
                  
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn Allbutton"
                  style={{marginLeft:15}}
                >
                  <span>Add Job Role</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn Allbutton"
                  style={{marginRight:15}}

                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
       
             <div class="box-footer" style={{marginTop:70}}>

             <button type="submit" class="up btn btn-primary" style={{width:120,height:50,marginTop:15,marginRight:30,borderRadius:10,marginBottom:50,marginLeft:15}} >Sumbit</button>


             <button type="reset" id="up-cancel" class="up btn btn-warning" style={{width:120,height:50,marginTop:15,marginRight:30,borderRadius:10,marginBottom:50}}>Cancel</button>


             </div>

           </form>
           </div>
            </div>
            </div>
            </div> 
     </>
   );
}

export default AddCompany;