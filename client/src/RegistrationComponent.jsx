import React, { useState ,useEffect} from "react"; 
import validator from 'validator';
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registrationform=()=>{

  const navigate=useNavigate();

  let minOffset = 0, maxOffset = 14;
  let thisYear = (new Date()).getFullYear();
  let allYears = [];
  for(let x = 0; x <= maxOffset; x++) {
      allYears.push(thisYear - x)
  }

  const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
  
  const [fnameError,setfnameError]=useState('');
  const [_10PerError, set10PerError] = useState(''); 
  const [_12PerError, set12PerError] = useState(''); 
  const [bePerError, setBEPerError] = useState(''); 
  const [cgpaError, setCgpaError] = useState(''); 
  const [emailError, setEmailError] = useState(''); 
  const validateEmail = (e) => { 
    var email = e.target.value ;
  
    if (validator.isEmail(email)) { 
      setEmail(e.target.value);
    } else { 
      setEmailError('Enter valid Email!') 
    } 
  } 

  const[fname,setFname]=useState();
  const[mname,setMname]=useState();
  const[lname,setLname]=useState();
  const[branch,setBranch]=useState("Computer Engineering");
  const[year,setYear]=useState();
  const[phone,setPhone]=useState();
  const[email,setEmail]=useState();
  const[dob,setDob]=useState();
  const[address,setAddress]=useState();
  const[ssc,setSsc]=useState();
  const[hsc,setHsc]=useState();
  const[BEPERCENTAGE,setBEPERCENTAGE]=useState();
  const[BECGPA,setBECGPA]=useState();
  const [image, setImage] = useState({myFile:""});
  const [resume, setResume] = useState();


  const  handleSelect  = async(event) =>{
   await setBranch(event.target.value);
  };

  
  const handlePhone = (value, data) => {
    setPhone(value);
  };



  const handleSubmit=async(e)=>{
	e.preventDefault();

  try {
    const data= await axios.post('http://localhost:3001/registration', {fname,mname,lname,branch,year,phone,dob,email,address,ssc,hsc,BECGPA,BEPERCENTAGE,image
   }).then(res=>{console.log(JSON.stringify(res.status))});
   } catch (error) {
     console.error('Error uploading image:', error);
   }
  }

        return (
            <div>
              <Navbar></Navbar>
              <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  
                   <div class="col main pt-5 mt-5" style={{maxWidth:"100%",minWidth:200,maxHeight:1000,minHeight:"21%"}}>    
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
<div class="row flex-lg-nowrap">

  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <ul class="nav nav-tabs">
                <li class="nav-item"><a href="" class="active nav-link" style={{color:"black",textDecoration:"none",fontSize:20,color:"coral"}}>Student Registration form</a></li>
              </ul>
              <div class="tab-content pt-3">
                <div class="tab-pane active" style={{color:"black",textDecoration:"none"}}>
                  <form class="form" onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>First Name</label>
                              <input class="form-control" type="text" name="firstName" onChange={(evt) =>setFname
            (evt.target.value)} required/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Middle Name</label>
                              <input class="form-control" type="text" name="middleName" onChange={(evt) =>setMname
            (evt.target.value)}/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input class="form-control" type="text" name="lastName" onChange={(evt) =>setLname
            (evt.target.value)}required/>
                              
                            </div>
                          </div>

                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Branch</label>
                              <select name="branch" id="branch" className="form-control" onChange={handleSelect}>
                                <option value="ComputerScience">Computer Science</option>
                                <option value="MechanicalEngineering">Mechanical Engineering </option>
                                <option value="CivilEngineering ">Civil Engineering  </option>
                                <option value="ElectricalEngineering "> Electrical Engineering </option>
                                <option value="ChemicalEngineering"> Chemical Engineering  </option>
                                <option value="InformationTechnology">Information Technology  </option>
                                <option value="Electronics">Electronics </option>
                                
                                
                              </select>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Passing Year</label>
                              <select class="form-control" onChange={(evt)=>setYear(evt.target.value)}>{yearList}</select>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Phone No.</label>
                            <PhoneInput  country={'in'}  class="form-control" // Set the default country or leave it empty
                           onChange={handlePhone}
                             required />
                             </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>DOB</label>
                              <input class="form-control" type="date" onChange={(evt) =>setDob
            (evt.target.value)} required/>
                            </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Email</label>
                              <input class="form-control" type="text" placeholder="user@example.com" onChange={(e) => validateEmail(e)} required/>
                              <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
                            </div>
                          </div>
                        </div>
                       
                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label>Address</label>
                              <textarea class="form-control" rows="5" placeholder="Address" onChange={(evt) =>setAddress
            (evt.target.value)}></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                            <h5 style={{textDecoration:"underline",paddingTop:30,paddingBottom:30}}>Education details</h5>
                            <br></br>
                          <div class="col">
                            <div class="form-group">
                              <label>10 Percentage</label>
                              <input class="form-control" type="text" name="10_per" required onChange={(e)=>{
                                if(!isNaN(e.target.value) && e.target.value>0 && e.target.value<100)
                                {
                                    setSsc(e.target.value);
                                }
                                else{
                                   set10PerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
                                
                              <span style={{ fontWeight: 'bold', color: 'red', }}>{_10PerError}</span>

                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>12/Diploma Percentage</label>
                              <input class="form-control" type="text" name="12_per" required onChange={(e)=>{
                                if(!isNaN(e.target.value) && e.target.value>0 && e.target.value<100)
                                {
                                    set12PerError('')
                                    setHsc(e.target.value);
                                }
                                else{
                                   set12PerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
                                <span style={{ fontWeight: 'bold', color: 'red', }}>{_12PerError}</span>
                            </div>
                          </div>
                          
                           </div>
                        <div className="row">
                        <div class="col">
                            <div class="form-group">
                              <label>BE Percentage</label>
                              <input class="form-control" type="number" name="be_per" required onChange={(e)=>{
                                if(!isNaN(e.target.value) && e.target.value>0 && e.target.value<100)
                                {
                                    setBEPerError('')
                                    setBEPERCENTAGE(e.target.value);
                                }
                                else{
                                   setBEPerError('Number should be between 0 and 100')
                                }
                              }
                                }/>
                                <span style={{ fontWeight: 'bold', color: 'red', }}>{bePerError}</span>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>BE CGPA</label>
                              <input class="form-control" type="text" name="be_cgpa" required onChange={(e)=>{
                                if(!isNaN(e.target.value) && e.target.value>0 && e.target.value<10)
                                {
                                    setCgpaError('')
                                    setBECGPA(e.target.value);
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
                        
                      </div>
                    </div>
                    <div class="row">
                            <h5 style={{textDecoration:"underline",paddingTop:30,paddingBottom:30}}>Attachment information</h5><br></br>
                            <br></br>

                            <div className="col">
                                 <label style={{color:"gray"}}>Photo</label>
                                 <span style={{color:"red"}}>*jpeg/jpg/png</span>
                                 <br></br>
                                 <input type="file" accept="image/jpeg,image/jpg,image/png" onChange={e=>setImage(e.target.files[0])} required/>
                            </div>
                            <div className="col">
                                 <label style={{color:"gray"}}>Resume</label>
                                 <span style={{color:"red"}}>*jpeg/png/pdf</span>
                                 <br></br>
                                 <input type="file" accept=".pdf/image/jpeg,image/jpg,image/png" required/>
                            </div>
                    </div>  
                   
                      <div class="box-footer" style={{marginTop:70}}>

                        <button type="submit" class="up btn btn-primary" style={{width:120,height:50,marginTop:15,marginRight:30,borderRadius:10}}>Sumbit</button>
    

                        <button type="reset" id="up-cancel" class="up btn btn-warning" style={{width:120,height:50,marginTop:15,marginRight:30,borderRadius:10}}>Cancel</button>

                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

  </div>
</div>
</div>
</div>
            </div>
            </div>
            </div>
        )
    
}

export default Registrationform