import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from './images/logo.png';
import ReactDOM from 'react-dom/client';
import Giris_formu from './Giris_formu';
import App from './App';
import SignOut_ from './functions/SignOut_';




function Sidebar() {



    const Anasayfa = () => {

        document.getElementById("anasayfa").style.display = "none";
        document.getElementById("sil").style.display = "block"; 
    }

  

    
    useEffect( () => {

        const bilgiGetir = async () => {

            document.getElementById("sil").style.display = "none"; 

        }

        bilgiGetir();


    }, []);



    return (
        <>
            <div className='row'>
                <div className='col-2'>
                    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ height: "100vh", position: "fixed", width: "250px"}}>
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <p class="fs-4 text-center">CyberMACS</p>
                        </a>
                        <hr />
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item">
                                <div className='row'>
                                    <div className='col-4 justify-content-center text-end'>
                                        <i class="fa-solid fa-house fa-xl"></i>
                                    </div>
                                    <div className='col-8'>
                                        <Link to="/Home" className="d-flex align-items-center text-white text-decoration-none" onClick={Anasayfa}><h5>Home</h5></Link>
                                    </div>
                                </div>
                            </li>
                            <br></br>
                            <li>
                                <div className='row'>
                                    <div className='col-4 justify-content-center text-end'>
                                        <i class="fa-regular fa-address-card fa-xl"></i>
                                    </div>
                                    <div className='col-8'>
                                        <Link to="/Apply" className="d-flex align-items-center text-white text-decoration-none" onClick={Anasayfa}><h5>Apply</h5></Link>

                                    </div>

                                </div>
                            </li>
                            <br></br>
                            <li>
                                <div className='row'>
                                    <div className='col-4 justify-content-center text-end'>
                                        <i class="fa-sharp fa-regular fa-envelope fa-xl"></i>
                                    </div>
                                    <div className='col-8'>
                                        <Link to="/Contact" className="d-flex align-items-center text-white text-decoration-none" onClick={Anasayfa}><h5>Contact</h5></Link>
                                    </div>

                                </div>
                            </li>
                        </ul>
                        <hr />
                        <div class="dropdown">
                            <div className='row'>
                                <div className='col-4 text-end'>
                                    <i class="fa-solid fa-user fa-lg"></i>
                                </div>
                                <div className='col-8 text-end'>
                                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>Profile</strong>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                        <li><Link to="/Profile" className="dropdown-item" onClick={Anasayfa}>Profile</Link></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a href="" className="dropdown-item" onClick={() =>  SignOut_()} >Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-10'>
                    <div className='row py-2 justify-content-center text-center'id="anasayfa" >
                        <h3 class="text-info bg-dark">Welcome to CyberMACS Panel</h3>
                        <br />
                        <img src={logo} className="app-logo" style={{width:"300px", height:"300px", marginTop: "150px"}}/>
                    </div>
                    <div className='row' id="sil">
                    <Outlet  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;

