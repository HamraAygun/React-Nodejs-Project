import { goster } from './Functions';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Giris_formu from './Giris_formu';
import ReactDOM from 'react-dom/client';




function Kayit_formu() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        const root = ReactDOM.createRoot(document.getElementById('root'));


        if (password != passRepeat) {
            setError("Sifreler eslesmiyor!");
            return;
        }

        try {

            const response = await axios.post('http://localhost:3001/kayit', {
                email,
                password
            });

            if (response.status === 200) {
                setSuccess('Kayit Basarili. Simdi giris yapabilirsiniz.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');

                root.render(

                    <Giris_formu />
                )


            } else {
                setError('Kayit olusturulurken bir hata olustu.');
            }


        } catch (err) {
            setError('Kayit olusturulurken bir hata olustu.');
        }

    }


    return (
        <>

            <div class="row">
                <div className="col-4"></div>
                <div class="col-4 justify-content-center border border-info" style={{ border: "30px", borderRadius: "15px", marginTop: "180px", padding: "15px" }}>
                    <form onSubmit={handleSubmit}>
                        <br></br>
                        <h1 class="h3 mb-3 fw-normal text-center">Create your account</h1>

                        <div class="form-floating py-2">
                            <input type="email" class="form-control border border-info"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email address" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating py-2">
                            <input type="password" class="form-control border border-info"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength="6"
                                required placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating py-2">
                            <input type="password" class="form-control border border-info"
                                value={passRepeat}
                                onChange={(e) => setPassRepeat(e.target.value)}
                                minLength="6"
                                required
                                placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <p id="sonuc"></p>
                        <div>
                            <button type="submit" class="w-100 btn btn-info"  >Create account</button>
                        </div>
                    </form>
                    <br></br>
                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    {success && <p style={{ color: 'green' }}> {success} </p>}
                    <div>
                        <p>Already have an account? <button type="button" class="btn btn-outline-info" onClick={() => goster("login")}>Log in</button></p>
                    </div>

                </div>
                <div className="col-4"></div>
            </div>



        </>
    );
}

export default Kayit_formu;