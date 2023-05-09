import NavList from './NavList';
import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';


function Personal() {

    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {

        const bilgiGetir = async () => {
            const id_ = sessionStorage.getItem("id_");


            try {
                const response = await axios.post("http://localhost:3001/formGosterPersonal",
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
                            <div id="personal">
                                <h3 class="text-center">Personal</h3>
                                <br />
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">First name</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.NAME} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Last name</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.LASTNAME} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Identity No</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.ID} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">BirthDate</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" class="form-control" value={bilgi.BIRTHDATE} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Nationality</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text"  class="form-control"value={bilgi.NATIONALITY} />
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Nationality</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text"  class="form-control"value={bilgi.SEC_NATIONALITY} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Disabled</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text"  class="form-control"value={bilgi.DISABLED} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row g-3 align-items-center">
                                            <div class="col-4">
                                                <label for="validationDefault01" class="form-label">Gender</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text"  class="form-control" value={bilgi.GENDER} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                </div>
                                <br />
                            </div>
                            <br />
                        </form>
                        <div className='row'>
                            <div className='col-6'>
                            </div>
                            <div className='col-6'>
                                <Link to="/Education" className="d-flex align-items-center text-decoration-none"><h5>Next</h5></Link>
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

export default Personal;
