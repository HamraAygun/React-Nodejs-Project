import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Profile() {


    const [old_password, setOld_password] = useState('');
    const [new_password, setNew_password] = useState('');
    const [new_password2, setNew_password2] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id_ = sessionStorage.getItem('id_')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/PasswordUpdate',
                {
                    id_,
                    new_password,
                }
            );
            if (response.status === 200) {    
                setOld_password('');
                setNew_password('');
                setNew_password2('');
                setSuccess('Your password has been updated!');
            }
            else {
                setError(response.data.error);
            }
        }
        catch (err) {
            setError('An error occurred in the database connection.');
        }
    }







    return (
        <>

            <div class="px-4 py-4 my-5 text-center">
                <i class="fa-solid fa-user-gear fa-4x"></i>
                <h3 class="display-5 ">Welcome</h3>
                <div class="col-lg-6 mx-auto">
                    <p id="profile_mail" class="lead mb-4"> </p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <h4>Your application information:</h4> <Link to="/Personal" className="badge text-bg-primary text-decoration-none"><h5>Open</h5></Link>
                    </div>
                    <br />
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <h4>Update your application:</h4> <Link to="/Basvuru_Guncelle" className="badge text-bg-primary text-decoration-none"><h5>Open</h5></Link>
                    </div>
                    <br />
                    <div >
                        <h4>You can change your password.</h4>
                        <div class="dropdown">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Change Password
                            </button>
                            <form class="dropdown-menu p-4" onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword2" class="form-label">Old Password</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="old"
                                        value={old_password}
                                        onChange={(e) => setOld_password(e.target.value)}
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword2" class="form-label">New Password</label>
                                    <input type="password" class="form-control" id="new_password" placeholder="new"
                                        value={new_password}
                                        onChange={(e) => setNew_password(e.target.value)}
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword2" class="form-label">New Password</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="new"
                                        value={new_password2}
                                        onChange={(e) => setNew_password2(e.target.value)}
                                        required />
                                </div>
                                {error && <p style={{ color: 'red' }}> {error} </p>}
                                {success && <p style={{ color: 'green' }}> {success} </p>}
                                <button type="submit" class="btn btn-primary">Change Password</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;