const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');


const app = express();
app.use(cors());

app.options('*', cors());


const port = 8083 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'facebook',
// });



app.get('/',(re,res)=> {
    return res.json("From BAckend Side");
});

app.post('/signup', (req, res) => {
  console.log(req.body); // This will log the incoming request body

  const password = req.body.password; 

  const insertSql = "INSERT INTO signup (`username`, `password`) VALUES (?, ?)";
  const values = [req.body.username, password];

  db.query(insertSql, values, (insertErr, result) => {
    if (insertErr) {
      return res.json({ Message: "Error in Node" });
    }
    return res.json({ Message: "User created successfully", result });
  });
});






  

app.listen(port,()=>{
    console.log("Server is running on port 8083");
})
