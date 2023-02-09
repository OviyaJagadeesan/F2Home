const express = require("express");
const cors = require("cors");
const app = express();
const data = require("../server/Categories.json");
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Password@1",
  database: "farm2home",
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Server connected");
});

app.post('/reg', (req, res) => {
  console.log(req.body);
  console.log("reg");
  const fullName = req.body.data.nameReg;//body.usernmae -> same name from the frontend
  const mail = req.body.data.emailIdReg;
  const password = req.body.data.passwordIdReg;
  const mobile = req.body.data.phonenoReg;
  console.log("after request")
  db.query(
    "INSERT INTO register (Name, Username, Password, PhoneNumber) VALUES (?,?,?,?)",
    [fullName,mail,password, mobile ],
    (err, result) => {
      if (err) {
        console.log("error", err);
      }
    }
  );
});

app.post('/log', (req, res) => {
  console.log(req.body);
  console.log("login");
  //body.usernmae -> same name from the frontend
  const mail = req.body.emailIdReg;
  const password = req.body.passwordIdReg;
  console.log("after request")
  db.query(
    "SELECT * FROM register where Username=? and Password=?",
    [mail,password],
    (err, result) => {
      if (err) {
        console.log("error", err);
      }
      else if(result.length>0){
      console.log("Result",result);
      res.send({success:true, result:result});
      }
      else{
        res.send({success:false});
      }
    }
  );
});


const categoriesdata = data.categories;
const freshlocaldata = data.localandfresh;
const farmsall = data.farms;

//For Getting all data's for all categories
app.get("/allcategories", (req, res) => {
  res.send(categoriesdata);
});

// http://localhost:4000/allproducts/?page=1&limit=8
//For Getting all data's for all products
app.get("/allproducts", (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 8;
  const a = (page - 1) * limit;
  const b = a + limit;
  res.send({
    total: freshlocaldata.length,
    product: freshlocaldata.slice(a, b),
  });
});

//For Getting all data's for all farms
app.get("/allfarms", (req, res) => {
  res.send(farmsall);
});

//PORT
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
