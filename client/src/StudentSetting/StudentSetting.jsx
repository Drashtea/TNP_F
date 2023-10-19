import React from "react";
import { useState } from "react";
import person from "./user.jpg";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
import CustFooter from "../CustFooter";
import "./StudentSetting.css";
function StudentSetting()
{
    
    
    return(
        
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
              <div class="row">
                <div class="col-12 col-sm-auto mb-3">
                  <div class="mx-auto" style={{width:140}}>
                    <div class="d-flex justify-content-center align-items-center rounded" style={{height:140,backgroundColor:"background-color: rgb(233, 236, 239)"}} >
                    <img src={person} style={{width:160,borderRadius:120}}/>
                    </div>
                  </div>
                </div>
                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div class="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">Suthar Priya</h4>
                    <p class="mb-0">sysuthar6354@gmail.com</p>
                    <div class="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div class="mt-2">
                      <button class="btn btn-primary">
                        <i class="fa fa-fw fa-camera"></i>
                        <span>Change Photo</span>
                      </button>
                    </div>
                  </div>
                  <div class="text-center text-sm-right">
                    <span class="badge badge-secondary">MSU T & P</span>
                    <div class="text-muted"><small>Profile</small></div>
                  </div>
                </div>
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item"><a href="" class="active nav-link" style={{color:"black",textDecoration:"none"}}>Settings</a></li>
              </ul>
              <div class="tab-content pt-3">
                <div class="tab-pane active" style={{color:"black",textDecoration:"none"}}>
                  <form class="form" novalidate="">
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Full Name</label>
                              <input class="form-control" type="text" name="name" placeholder="Suthar Priya" value="Suthar Priya"/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Username</label>
                              <input class="form-control" type="text" name="username" placeholder="priya@123" value="priya@123"/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Branch</label>
                              <input class="form-control" type="text" name="phone_no" placeholder="BE-IV" value="BE-IV"/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Phone No.</label>
                              <input class="form-control" type="text" name="phone_no" placeholder="9313519823" value="9313519823"/>
                            </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Email</label>
                              <input class="form-control" type="text" placeholder="user@example.com"/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>10 Percentage</label>
                              <input class="form-control" type="text" name="10_per" placeholder="" value=""/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>12/Diploma Percentage</label>
                              <input class="form-control" type="text" name="12_per" placeholder="" value=""/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>BE Percentage</label>
                              <input class="form-control" type="text" name="12_per" placeholder="" value=""/>
                            </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label>Address</label>
                              <textarea class="form-control" rows="5" placeholder="Address"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="mb-2"><b>Change Password</b></div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Current Password</label>
                              <input class="form-control" type="password" placeholder="••••••"/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>New Password</label>
                              <input class="form-control" type="password" placeholder="••••••"/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                              <input class="form-control" type="password" placeholder="••••••"/></div>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div class="box-footer">

                        <button type="submit" class="up btn btn-primary" style={{width:120,height:50,marginTop:15,marginRight:30,borderRadius:10}}>Save Change</button>
    

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

    );
}

export default StudentSetting;