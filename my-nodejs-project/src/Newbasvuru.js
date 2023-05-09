import NavList from './NavList';
import React, { useState } from 'react';
import axios from 'axios';


function Newbasvuru() {

    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [id, setId] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [nationality, setNationality] = useState('');
    const [secnationality, setsecNatioanlity] = useState('');
    const [disabled, setdisabled] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [gpa, setGpa] = useState('');
    const [graduation, setGraduation] = useState('');
    const [dateofgrad, setDateofgrad] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [cv, setCv] = useState('');
    const [diploma, setDiploma] = useState('');
    const [englishcert, setEnglishcert] = useState('');
    const [passport, setPassport] = useState('');
    const [letter, setLetter] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    var apply = sessionStorage.getItem("apply");

    const id_ = sessionStorage.getItem('id_')


    const handleSubmit = async (e) => {
        e.preventDefault();

        apply = true;


        try {

            const response = await axios.post('http://localhost:3001/apply',

                {   
                    id_,
                    name,
                    lastName,
                    id,
                    birthdate,
                    nationality,
                    secnationality,
                    disabled,
                    gender,
                    department,
                    gpa,
                    graduation,
                    dateofgrad,
                    number,
                    mail,
                    country,
                    city,
                    address,
                    cv,
                    diploma,
                    englishcert,
                    passport,
                    letter  
                }
            );

            if (response.status === 200) {
                setName('');
                setLastname('');
                setId('');
                setBirthdate('');
                setNationality('');
                setsecNatioanlity('');
                setdisabled('');
                setGender('');
                setDepartment('');
                setGpa('');
                setGraduation('');
                setDateofgrad('');
                setNumber('');
                setMail('');
                setCountry('');
                setCity('');
                setAddress('');
                setCv('');
                setDiploma('');
                setEnglishcert('');
                setPassport('');
                setLetter('');
                setSuccess('Your application has been successfully received. You can see your application from your profile.');

            }
         
            else {
                setError(response.data.error);
            }


        }
        catch (err) {
            setError('veritabani baglantisinda bir hata olustu.');
        }
    }


    const buton = ["personal", "education", "contact", "files"];
    const baslik = ["Personal", "Education", "Contact", "Files"];


    const apply_goster = (index) => {

        if (buton[index] == "personal") {

            document.getElementById("personal").style.display = "block";
            document.getElementById("education").style.display = "none";
            document.getElementById("contact").style.display = "none";
            document.getElementById("files").style.display = "none";
            document.getElementById("buton").style.display = "none";


        }
        else if (buton[index] == "education") {

            document.getElementById("personal").style.display = "none";
            document.getElementById("education").style.display = "block";
            document.getElementById("contact").style.display = "none";
            document.getElementById("files").style.display = "none";
            document.getElementById("buton").style.display = "none";


        }
        else if (buton[index] == "contact") {

            document.getElementById("personal").style.display = "none";
            document.getElementById("education").style.display = "none";
            document.getElementById("contact").style.display = "block";
            document.getElementById("files").style.display = "none";
            document.getElementById("buton").style.display = "none";


        }
        else if (buton[index] == "files") {

            document.getElementById("personal").style.display = "none";
            document.getElementById("education").style.display = "none";
            document.getElementById("contact").style.display = "none";
            document.getElementById("files").style.display = "block";
            document.getElementById("buton").style.display = "block";


        }

    }


    return (
        <>

            <div className="row">
                <div className="row">
                    <div>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center'
                        }}
                        >
                            {baslik.map((eleman, index) =>
                            (<NavList menuElemani={eleman}
                                tiklandiginda={() => apply_goster(index)}
                            />)

                            )}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div class="row">
                        <div class="col-3"> </div>
                        <div class="col-6">
                            <form onSubmit={handleSubmit}>
                                <div id="personal" style={{ display: "none" }}>
                                    <h3 class="text-center">Personal</h3>
                                    <br />
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Name <span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Surname<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={lastName}
                                                        onChange={(e) => setLastname(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">ID No<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="number" class="form-control"
                                                        value={id}
                                                        onChange={(e) => setId(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">BirthDate <span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="date" class="form-control"
                                                        value={birthdate}
                                                        onChange={(e) => setBirthdate(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Citizen <span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={nationality}
                                                        onChange={(e) => setNationality(e.target.value)}
                                                        required />

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Citizen</label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control" placeholder="Second"
                                                        value={secnationality}
                                                        onChange={(e) => setsecNatioanlity(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-2">
                                                    <label for="validationDefault01" class="form-label">Disabled</label>
                                                </div>
                                                <div class="col-10">
                                                    <input type="text" class="form-control" placeholder="If you have any disability, can you briefly explain?"
                                                        value={disabled}
                                                        onChange={(e) => setdisabled(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />



                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Gender<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <select class="form-select form-select-m mb-3" aria-label=".form-select-lg example"
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                    >
                                                        <option defaultValue>Choose..</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Male">Male</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <div id="education" style={{ display: "none" }}>
                                    <h3 class="text-center">Education</h3>
                                    <br />
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Department<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={department}
                                                        onChange={(e) => setDepartment(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">GPA<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="number" class="form-control"
                                                        value={gpa}
                                                        onChange={(e) => setGpa(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Graduation Status<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <select class="form-select form-select-m mb-3" aria-label=".form-select-lg example"
                                                        value={graduation}
                                                        onChange={(e) => setGraduation(e.target.value)}
                                                        required >
                                                        <option defaultValue>Choose..</option>
                                                        <option value="Graduated">Graduated</option>
                                                        <option value="Continues">Continues</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Date Grad<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="date" class="form-control"
                                                        value={dateofgrad}
                                                        onChange={(e) => setDateofgrad(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='contact' style={{ display: "none" }}>
                                    <h3 class="text-center">Contact</h3>
                                    <br />
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Number<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="number" class="form-control" placeholder="(5__) ___ __ __"
                                                        value={number}
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Mail<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="mail" class="form-control" placeholder="name@example.com"
                                                        value={mail}
                                                        onChange={(e) => setMail(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">Country<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={country}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-4">
                                                    <label for="validationDefault01" class="form-label">City<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" class="form-control"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-2">
                                                    <label for="validationDefault01" class="form-label">Address<span style={{ color: 'red' }}>*</span></label>
                                                </div>
                                                <div class="col-10">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <div id="files" style={{ display: "none" }}>
                                    <h3 class="text-center">Files</h3>
                                    <br />
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row g-3 align-items-center">
                                                <div class="col-2 mb-3">
                                                    <label for="formFile" class="form-label">Resume</label>
                                                </div>
                                                <div class="col-10 mb-3">
                                                    <div class="input-group mb-3">
                                                        <input class="form-control" type="file"
                                                            value={cv}
                                                            onChange={(e) => setCv(e.target.value)}
                                                        />
                                                    </div>
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
                                                    <div class="input-group mb-3">
                                                        <input class="form-control" type="file"
                                                            value={diploma}
                                                            onChange={(e) => setDiploma(e.target.value)}
                                                        />
                                                    </div>
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
                                                    <div class="input-group mb-3">
                                                        <input class="form-control" type="file"
                                                            value={englishcert}
                                                            onChange={(e) => setEnglishcert(e.target.value)}
                                                        />
                                                    </div>
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
                                                    <div class="input-group mb-3">
                                                        <input class="form-control" type="file"
                                                            value={passport}
                                                            onChange={(e) => setPassport(e.target.value)}
                                                        />
                                                    </div>
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
                                                    <div class="input-group mb-3">
                                                        <input class="form-control" type="file"
                                                            value={letter}
                                                            onChange={(e) => setLetter(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <div class="row" style={{ display: "none" }} id="buton">
                                    {error && <p style={{ color: 'red' }}> {error} </p>}
                                    {success && <p style={{ color: 'green' }}> {success} </p>}
                                    <hr />
                                    <div class="col-12 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                        <button type="submit" class="btn btn-primary"> Apply</button>
                                        <button type="reset" class="btn btn-outline-primary me-2">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-3"> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newbasvuru;