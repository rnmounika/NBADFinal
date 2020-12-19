const express = require('express');
const cors = require('cors');
  const app = express();
 const port =3001;
const mongoose = require('mongoose');
const routes = require("./routes");

// const budgetModel = require('./models/budget_data')
// const mongoDBClient = require('mongodb').MongoClient
// let url= 'mongodb://localhost:27017/mongodb_budget';
let url= 'mongodb+srv://mounika:mounika@cluster0.wx8cs.mongodb.net/mongodb_budget?retryWrites=true&w=majority';
// mongodb+srv://mounika:<password>@cluster0.wx8cs.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to database")

}).catch(err=> console.log(err))
// const app = express();   
app.use(cors());
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());
    app.use("/api", routes);
    // app.use("/api/budget", routes);
      // app.use(express.json())
    
    app.listen(3001 , () =>{
        console.log(`API servered at https://localhost:3001`);
    });
