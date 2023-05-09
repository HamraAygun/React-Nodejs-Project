import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";



function Apply() {
    return (
        <>
            <div class="row">
                <div class="col-3"> </div>

                <div class="col-6" >
                <Outlet />


                    <div class="row py-5" style={{marginTop: "150px"}}>
                        <h2 class="text-center">CyberMACS Application Form</h2>
                    </div>
                  

                    <div className='row'>
                        <Link to="/Newbasvuru" className="d-flex align-items-center text-decoration-none" ><h5>Apply Now!</h5></Link>
                    </div>
                </div>
                <div class="col-3"> </div>
            </div>
        </>
    )
}

export default Apply;
