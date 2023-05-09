import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Apply from './Apply';
import Contact from './Contact';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Newbasvuru from './Newbasvuru';
import Personal from './Personal';
import Education from './Education';
import Contact_basvuru from './Contact_basvuru';
import Files from './Files';
import Basvuru_Guncelle from './Basvuru_Guncelle';


export default function Router() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Sidebar />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Apply" element={<Apply />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path='/Newbasvuru' element={<Newbasvuru />} />
            <Route path='/Personal' element={<Personal />} />
            <Route path='/Education' element={<Education />} />
            <Route path='/Contact_basvuru' element={<Contact_basvuru />} />
            <Route path='/Files' element={<Files />} />
            <Route path='/Basvuru_Guncelle' element={<Basvuru_Guncelle />} />


        </Route>
    </Routes>
</BrowserRouter>
  );
}