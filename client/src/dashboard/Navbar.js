import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="sidebar-offcanvas"  data-target="#sidebar" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#" style={{fontSize:"25px",color:"white"}}>MSU T & P</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink className="nav-link"  data-toggle="modal" to="/campusdrive">Home</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link"  data-toggle="modal" to="/campusdrive">Results</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link"  data-toggle="modal" to="/campusdrive">Campus Drives</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link"  data-toggle="modal" to="/campusdrive">Updates</NavLink>
                        </li>
               
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar;