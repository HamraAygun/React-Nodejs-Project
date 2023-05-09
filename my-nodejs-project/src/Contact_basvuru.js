import NavList from './NavList';
import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';



function Contact_basvuru() {

    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {

        const bilgiGetir = async () => {
            const id_ = sessionStorage.getItem("id_");


            try {
                const response = await axios.post("http://localhost:3001/formGosterContact",
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
                            <div id='contact'>
                                <h3 class="text-center">Contact</h3>
                                <br />
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Number</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.PHONE} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Mail</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.MAIL} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Country</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.COUNTRY} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">City</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.CITY} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2">
                                                <label for="validationDefault01" class="form-label">Address</label>
                                            </div>
                                            <div class="col-10">
                                                <input type="text" class="form-control" value={bilgi.ADDRESS} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <br />
                        </form>
                        <div className='row'>
                            <div className='col-6'>
                                <Link to="/Education" className="d-flex align-items-center text-decoration-none"><h5>Back</h5></Link>
                            </div>
                            <div className='col-6'>
                                <Link to="/Files" className="d-flex align-items-center text-decoration-none"><h5>Next</h5></Link>
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

export default Contact_basvuru;
