const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const { faPhone } = require('@fortawesome/free-solid-svg-icons');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeproject"
});

connection.connect((err) => {
    if(err) {
        console.error('Veritabanina baglanirken hata olustu: ', err);
        return;
    }
    console.log('Veritabanina baglanildi.');
});




app.post('/kayit', (req,res) => {

    const {email , password} = req.body;

    const query = "INSERT INTO account (EMAIL,PASSWORD) VALUE (?,?)";
    
    connection.query(query, [email, password], (err,result) => {

        if(err){
            console.error("Error while entering information into database: ", err);
            res.status(500).send({error: "An error occurred while creating the record."});
            return;
        }
        res.status(200).send({message: "Registration Successful!"});

    })
    
});



app.post('/', (req,res) => {


    const {email, password} = req.body;

    const query = "SELECT * FROM account WHERE EMAIL=? AND PASSWORD=?";

    connection.query(query, [email, password], (err, result) => {
        if(err){
            console.error("There was an error checking the information. ", err);
            res.status(500).send({error: 'There was an error checking the information.'});
            return;
        }
        if(result.length > 0){
            const user_id = result[0].USER_ID;


            const isLoginQuery = "UPDATE account SET isLogin = 1 WHERE USER_ID=?";

            connection.query(isLoginQuery, user_id, (err,result) => {
                if(err){
                    console.error("An error occurred while updating the login information. ", err);
                    res.status(500).send({error: 'Failed to update isLogin.'});
                }
            });

            res.status(200).send({message: '1', id: user_id});
        }else{
            res.status(200).send({message: '0'});
        }
        

    })



});



app.post('/signout', (req,res) => {

        const {id_} = req.body;

        const query = "UPDATE account SET isLogin = 0 WHERE USER_ID=?";

        connection.query(query, [id_], (err,result) => {
            if(err){
                console.error("An error occurred while updating isLogin. ", err);
                res.status(500).send({error: 'An error occurred while updating isLogin.'});
                return;
            }
            
            res.status(200).send({message: 'User output has been updated.'});
        });

});



app.post('/apply', async (req, res) => {
    const { id_, name, lastName, id, birthdate, nationality, secnationality, gender, disabled, department, gpa, graduation, dateofgrad, number, mail, country, city, address, cv, diploma, englishcert, passport, letter } = req.body;
  
    try {
      const kontrolQuery = "SELECT * FROM personal_information WHERE BASVURAN_ID = ?";
      const query1 = "INSERT INTO personal_information (BASVURAN_ID, NAME, LASTNAME, GENDER, NATIONALITY, SEC_NATIONALITY, BIRTHDATE, ID, DISABLED) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const query2 = "INSERT INTO contact (BASVURAN_ID, PHONE, MAIL, COUNTRY, CITY, ADDRESS) VALUE (?, ?, ?, ?, ?, ?)";
      const query3 = "INSERT INTO education (BASVURAN_ID, GRADUATION, DEPARTMENT, GPA, DATEOFGRAD) VALUE (?, ?, ?, ?, ?)";
      const query4 = "INSERT INTO files (BASVURAN_ID, CV, DIPLOMA, ENGLISHCERT, PASSPORT, LETTER) VALUE (?, ?, ?, ?, ?, ?)";
  
      await connection.beginTransaction();
  
      const result = await connection.query(kontrolQuery, [id_]);
      if (result.length > 0) {
        res.status(201).send({ error: "Only one application can be made from the same account." });
        return;
      }
  
      await connection.query(query1, [id_, name, lastName, gender, nationality, secnationality, birthdate, id, disabled]);
  
      await connection.query(query2, [id_, number, mail, country, city, address]);
  
      await connection.query(query3, [id_, graduation, department, gpa, dateofgrad]);
  
      await connection.query(query4, [id_, cv, diploma, englishcert, passport, letter]);
  
      await connection.commit();
  
      res.status(200).send({ message: "Application successful!" });
    } catch (error) {
      await connection.rollback();
      console.error("Error while entering information into database: ", error);
      res.status(500).send({ error: "An error occurred while creating your application." });
    }
  });



  app.post('/applyUpdate', async (req, res) => {
    const { id_, name, lastName, id, birthdate, nationality, secnationality, gender, disabled, department, gpa, graduation, dateofgrad, number, mail, country, city, address, cv, diploma, englishcert, passport, letter } = req.body;
  
    try {
      const kontrolQuery = "SELECT * FROM personal_information WHERE BASVURAN_ID = ?";
      const query1 = "UPDATE personal_information SET NAME=?, LASTNAME=?, GENDER=?, NATIONALITY=?, SEC_NATIONALITY=?, BIRTHDATE=?, ID=?, DISABLED=? WHERE BASVURAN_ID=?";
      const query2 = "UPDATE contact SET PHONE=?, MAIL=?, COUNTRY=?, CITY=?, ADDRESS=? WHERE BASVURAN_ID=?";
      const query3 = "UPDATE education SET GRADUATION=?, DEPARTMENT=?, GPA=?, DATEOFGRAD=? WHERE BASVURAN_ID=?";
      const query4 = "UPDATE files SET CV=?, DIPLOMA=?, ENGLISHCERT=?, PASSPORT=?, LETTER=? WHERE BASVURAN_ID=?";

      // start transaction
      await connection.beginTransaction();
  
      // check if the applicant already exists
      const result = await connection.query(kontrolQuery, [id_]);
      if (result.length === 0) {
        res.status(201).send({ error: "Record not found for the specified ID." });
        return;
      }
  
      await connection.query(query1, [name, lastName, gender, nationality, secnationality, birthdate, id, disabled, id_]);
  
      await connection.query(query2, [number, mail, country, city, address, id_]);
  
      await connection.query(query3, [graduation, department, gpa, dateofgrad, id_]);
  
      await connection.query(query4, [cv, diploma, englishcert, passport, letter, id_]);
  
      await connection.commit();
  
      res.status(200).send({ message: "Update successful!" });
    } catch (error) {

      await connection.rollback();
      console.error("An error occurred while entering information into the database. ", error);
      res.status(500).send({ error: "An error occurred while updating." });
    }
  });



  app.post('/PasswordUpdate', (req, res) => {
    const { id_, new_password } = req.body;
  
    const kontrolQuery = "SELECT * FROM account WHERE USER_ID = ?";
  
    connection.query(kontrolQuery, [id_], (err, result) => {
      if (err) {
        console.error("Veritabanına sorgu yapılırken hata oluştu: ", err);
        res.status(500).send({ error: "Veritabanına sorgu yapılırken hata oluştu." });
        return;
      }
      console.log(result);
  
      if (result.length === 0) {
        res.status(404).send({ error: "Belirtilen ID değerine sahip kayıt bulunamadı." });
        return;
      }
  
      const query = "UPDATE account SET PASSWORD=? WHERE USER_ID = ?";
  
      connection.query(query, [new_password, id_], (err, result) => {
        if (err) {
          console.error("Veritabanına güncelleme yapılırken hata oluştu. ", err);
          res.status(500).send({ error: "Veritabanına güncelleme yapılırken hata oluştu." });
          return;
        }
  
        res.status(200).send({ message: "Basvuru basariyla kaydedildi." });
      });
    });
  });



app.post("/formGosterPersonal", (req,res) =>{

    const user_id = req.body.id_;

    const query = "SELECT * FROM personal_information WHERE BASVURAN_ID = ?";

    connection.query(query, [user_id], (err, result) => {
        
        if(err){
            console.error("An error occurred while retrieving information from the database.", err);
            res.status(500).send({error: "An error occurred while retrieving information from the database."});
            return;
        }
        if(result.length === 0){
            res.status(404).send({message: "Application not found!"})
        }else{

            res.status(200).send({
                NAME: result[0].NAME,
                LASTNAME: result[0].LASTNAME,
                ID: result[0].ID,
                BIRTHDATE: result[0].BIRTHDATE,
                NATIONALITY: result[0].NATIONALITY,
                SEC_NATIONALITY: result[0].SEC_NATIONALITY,
                DISABLED: result[0].DISABLED,
                GENDER: result[0].GENDER});
        }  
    });
})




app.post("/formGosterEducation", (req,res) =>{

    const user_id = req.body.id_;

    const query = "SELECT * FROM education WHERE BASVURAN_ID = ?";

    connection.query(query, [user_id], (err, result) => {
        
        if(err){
            console.error("An error occurred while retrieving information from the database.", err);
            res.status(500).send({error: "An error occurred while retrieving information from the database."});
            return;
        }
        if(result.length === 0){
            res.status(404).send({message: "Application not found!"})
        }else{

            res.status(200).send({
                GRADUATION: result[0].GRADUATION,
                DEPARTMENT: result[0].DEPARTMENT,
                GPA: result[0].GPA,
                DATEOFGRAD: result[0].DATEOFGRAD});
        }
    
    });
})



app.post("/formGosterContact", (req,res) =>{

    const user_id = req.body.id_;

    const query = "SELECT * FROM contact WHERE BASVURAN_ID = ?";

    connection.query(query, [user_id], (err, result) => {
        
        if(err){
            console.error("An error occurred while retrieving information from the database.", err);
            res.status(500).send({error: "An error occurred while retrieving information from the database."});
            return;
        }
        if(result.length === 0){
            res.status(404).send({message: "Application not found!"})
        }else{

            res.status(200).send({
                PHONE: result[0].PHONE,
                MAIL: result[0].MAIL,
                COUNTRY: result[0].COUNTRY,
                CITY: result[0].CITY,
                ADDRESS: result[0].ADDRESS});
        }
    
    });
})



app.post("/formGosterFiles", (req,res) =>{

    const user_id = req.body.id_;

    const query = "SELECT * FROM files WHERE BASVURAN_ID = ?";

    connection.query(query, [user_id], (err, result) => {
        
        if(err){
            console.error("An error occurred while retrieving information from the database.", err);
            res.status(500).send({error: "An error occurred while retrieving information from the database."});
            return;
        }
        if(result.length === 0){
            res.status(404).send({message: "Application not found!"})
        }else{

            res.status(200).send({
                CV: result[0].CV,
                DIPLOMA: result[0].DIPLOMA,
                ENGLISHCERT: result[0].ENGLISHCERT,
                PASSPORT: result[0].PASSPORT,
                LETTER: result[0].LETTER});
        }
    
    });
})




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});



