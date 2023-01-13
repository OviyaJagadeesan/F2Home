const express = require("express");
const cors=require("cors");
const app = express();
const data = require("../server/Categories.json");

app.use(cors());

const categoriesdata = data.categories;
const freshlocaldata =data.localandfresh;
const farmsall=data.farms;

//For Getting all data's for all categories
app.get('/allcategories',(req,res)=>{
 
    res.send(categoriesdata);
});

// http://localhost:4000/allproducts/?page=1&limit=8
//For Getting all data's for all products
app.get('/allproducts',(req,res)=>{

const page = req.query.page ? parseInt(req.query.page) : 1;
const limit = req.query.limit ? parseInt(req.query.limit) : 8;
const a= (page-1) * limit;
const b = a + limit;
  res.send({total:freshlocaldata.length,product:freshlocaldata.slice(a,b)});
});

//For Getting all data's for all farms
app.get('/allfarms',(req,res)=>{
  res.send(farmsall);
});

//PORT
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});