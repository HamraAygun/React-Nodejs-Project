import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';



function Education() {



    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {

        const bilgiGetir = async () => {
            const id_ = sessionStorage.getItem("id_");


            try {
                const response = await axios.post("http://localhost:3001/formGosterEducation",
                    { id_ }
                );

                if (response.status === 200) {

                    setBilgi(response.data);

                }
            } catch (err) {

                setError("Kullanici bilgileri gosterilemedi.");

            }
        }

        bilgiGetir();

    }, []);



    return (
        <>


            <div className="row" style={{ marginTop: "150px" }}>
                <div class="row">
                    <div class="col-3"> </div>
                    <div class="col-6">
                        <form>
                            <div id="education">
                                <h3 class="text-center">Education</h3>
                                <br />
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Department</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.DEPARTMENT} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">GPA</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text"  class="form-control" value={bilgi.GPA} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Graduation Status</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.GRADUATION} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Date Grad</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.DATEOFGRAD} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </form>
                        <div className='row'>
                            <div className='col-6'>
                                <Link to="/Personal" className="d-flex align-items-center text-decoration-none"><h5>Back</h5></Link>
                            </div>
                            <div className='col-6'>
                                <Link to="/Contact_basvuru" className="d-flex align-items-center text-decoration-none"><h5>Next</h5></Link>
                            </div>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    <div class="col-3"> </div>
                </div>
            </div>



        </>
    )



}

export default Education;
