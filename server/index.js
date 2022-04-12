const express = require('express');
const mysql = require ('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const app = express()

//use express static folder
app.use (express.static("./public"))

app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// creates connection
const db = mysql.createConnection({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'registration',


});
const db1 = mysql.createConnection({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'client_web_registration',
});

//Routes start
app.get('/register',function(req,res) {
  db.query("SELECT * FROM registered_users", (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});
app.get('/websiteregister',function(req,res) {
  db1.query("SELECT * FROM registered_client_websites", (err, results) => {
    if(err) 
    {
      console.log(err);
      throw err;
    }
    res.send(results);
  });
});
app.get('/login',function(req,res) {
  res.send('yes')
});
 app.post('/Login',async (req,res)=>{
  var userid   = req.body.userid;
  var password = req.body.password;
  db.query('SELECT * FROM registered_users WHERE userid = ? AND password = ?',[userid, password], async function (error, results) {
    if (error) {
      return res.send({
        "code"  : 400,
        status : 0,
          // result : result,
        "failed": "error ocurred"
      })
    }
    // console.log(results)
      if(results.length >0){
           return res.send({
              "code"   :200,
              status : 1,
              "success":"login sucessfull"
            })
          }
        else{
          return res.send({
               "code":204,
               status : 0,
               "success":"userid and password does not match"
          }) 
      }
    });
  })
  app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.post('/register', (req,res)=>{
  var sql = 'INSERT INTO registered_users SET ?';
  const userDetails = req.body
console.log(userDetails.emaiil) //for debugging purpose
  db.query(sql, userDetails,function (err, data) { 
    if (err) {
          if(err.code == 11000) {
            message={ status: 0, result: 'User Id already specified' }
                  return res.send(message);
          }
            message={ status: 0, result: err }
                return res.send(message);
      }
      return res.json({ status: 1, result: data});
      });
    })
    
    app.post('/websiteregister', (req,res)=>{
      var sql = 'INSERT INTO registered_client_websites SET ?';
      const websiteDetails = req.body
      // console.log(websiteDetails)

      console.log(websiteDetails.file) 

      // console.log(websiteDetails.nameofwebsite) 

      db1.query(sql,websiteDetails,function (err, data) { 
        if (err) {
              if(err.code == 11000) {
                message={ status: 0, result: 'Website URL already used' }
                      return res.send(message);
              }
                message={ status: 0, result: err }
                    return res.send(message);
          }
          return res.json({ status: 1, result: data});
          });
        })
app.listen('3001', () => {
    console.log(`Server running on port 3001`);
   });
