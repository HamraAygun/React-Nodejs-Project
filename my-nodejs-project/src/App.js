import React from 'react';
import { goster } from './Functions';
import Router from './Router';
import Giris_formu from './Giris_formu';
import ReactDOM from 'react-dom/client';
import Home from './Home';




function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));

  var isLogin = sessionStorage.getItem("isLogin");


  if(isLogin == "true"){
      root.render(
          <Router />
      )
  }



  return (
    <>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <div className='row py-2 justify-content-center text-center' style={{ marginTop: "250px" }}>
            <h3>Welcome to CyberMACS Panel</h3>
          </div>
          <div className='row text-center py-2'>
            <p>Log in with your CyberMACS account to continue</p>
          </div>
          <div className='row py-2'>
            <div className='col-6 text-end'>
              <button class="btn btn-info" onClick={() => goster("login")}>Log in</button>
            </div>
            <div className='col-6'>
              <button class="btn btn-info" onClick={() => goster("signup")}>Sign up</button>
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
    </>
  );
}

export default App;
