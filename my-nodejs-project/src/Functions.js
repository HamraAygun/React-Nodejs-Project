import ReactDOM from 'react-dom/client';
import Giris_formu from './Giris_formu';
import Kayit_formu from './Kayit_formu';
import Sidebar from './Sidebar';
import Router from './Router';
import App from './App.js';
import { faL } from '@fortawesome/free-solid-svg-icons';



export const goster = (eleman) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));


    if (eleman == "login") {

        root.render(
            <Giris_formu />
        )
    }
    else if (eleman == "signup") {

        root.render(
            <Kayit_formu />
        )
    }
}













