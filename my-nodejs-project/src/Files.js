import NavList from './NavList';
import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';


function Files() {

    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {

        const bilgiGetir = async () => {
            const id_ = sessionStorage.getItem("id_");


            try {
                const response = await axios.post("http://localhost:3001/formGosterFiles",
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
                            <div id="files">
                                <h3 class="text-center">Files</h3>
                                <br />
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2 mb-3">
                                                <label for="formFile" class="form-label">Resume</label>
                                            </div>
                                            <div class="col-10 mb-3">
                                                <input type="text" class="form-control" value={bilgi.CV} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2 mb-3">
                                                <label for="formFile" class="form-label">Diploma</label>
                                            </div>
                                            <div class="col-10 mb-3">
                                                <input type="text" class="form-control" value={bilgi.DIPLOMA} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2 mb-3">
                                                <label for="formFile" class="form-label">English certificate</label>
                                            </div>
                                            <div class="col-10 mb-3">
                                                <input type="text" class="form-control" value={bilgi.ENGLISHCERT} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2 mb-3">
                                                <label for="formFile" class="form-label">Passport</label>
                                            </div>
                                            <div class="col-10 mb-3">
                                                <input type="text"  class="form-control" value={bilgi.PASSPORT} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-2 mb-3">
                                                <label for="formFile" class="form-label">Letter of intent</label>
                                            </div>
                                            <div class="col-10 mb-3">
                                                <input type="text" class="form-control" value={bilgi.LETTER} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </form>
                        <div className='row'>
                            <div className='col-6'>
                                <Link to="/Contact_basvuru" className="d-flex align-items-center text-decoration-none"><h5>Back</h5></Link>
                            </div>
                            <div className='col-6'>
                                <Link to="/Newbasvuru" className="d-flex align-items-center text-decoration-none"><h5>Update</h5></Link>
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

export default Files;
