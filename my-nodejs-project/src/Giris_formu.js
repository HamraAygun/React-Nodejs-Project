import { goster } from './Functions';
import Router from './Router';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';




function Giris_formu() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async (e) => {

        const root = ReactDOM.createRoot(document.getElementById('root'));



        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }

            );

            if (response.status === 200) {

                var isLogin = true;

                sessionStorage.setItem("isLogin", isLogin);

                var user_mail;

                sessionStorage.setItem('user_mail', user_mail);


                if (response.data.message === "1") {
                    sessionStorage.setItem("id_", response.data.id);

                    root.render(

                        <Router />
                    )


                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...')


                } else {
                    setError('Kullanici adi veya sifre hatali.');
                }
            }
        } catch (err) {
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }
    }



    return (
        <>
            <div class="row" >
                <div className="col-4"></div>
                <div class="col-4 justify-content-center border border-info" style={{ border: "30px", borderRadius: "15px", marginTop: "180px", padding: "15px" }}>
                    <form onSubmit={handleSubmit}>
                        <h3 id="giris_yap"></h3>
                        <br />
                        <h1 class="h3 mb-3 fw-normal justify-content-center text-center">Welcome back</h1>

                        <div class="form-floating py-2">
                            <input type="email" class="form-control border border-info"
                                id="user_mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating py-2">
                            <input type="password" class="form-control border border-info"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div>
                            <button type="submit" class="w-100 btn btn-info" >Log in</button>
                        </div>
                    </form>
                    <br></br>

                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <div>
                        <p>Don't have an account? <button type="button" class="btn btn-outline-info" onClick={() => goster("signup")}>Sign up</button></p>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    );

}
export default Giris_formu;