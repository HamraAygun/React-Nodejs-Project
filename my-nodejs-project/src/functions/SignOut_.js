import axios from 'axios';
import React, {useState} from 'react';
import App from '../App';
import ReactDOM from 'react-dom/client';
import Giris_formu from '../Giris_formu';
import { faL } from '@fortawesome/free-solid-svg-icons';



async function SignOut_(){


    const root = ReactDOM.createRoot(document.getElementById('root'));

    const id_ = sessionStorage.getItem("id_");
    
    var isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);

    

    try{

        const response = await axios.post('http://localhost:3001/signout',
            {id_}
        );

        if(response.status === 200){

            root.render(

                <App />
            )
          
        }else{
            alert("Şu an cikisinizi yapamiyoruz.");
        }


    }catch(err){
        console.error(err);
    }

}

export default SignOut_;