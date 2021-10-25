// INTIALING IMPORT STATEMENTS
const { loadData } = require("./DataModel");
const express = require("express");

const datafile = require("./chemical_type.json");
const count = Object.keys(datafile).length.toString();
// const axios = require("axios");
const app = express();

const {
  getPatentDataChem,
  getPatentDataTitle,
  getPatentDataPatentNo,
} = require("./Functions");
const fs = require('fs');
const origins = ["http://localhost:3000/", "https://chemovator-6c2e2.web.app"];
const cors = require('cors');
const corsOptions = {
  origin: origins,
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});



//PORT 3001 ASSIGNED TO THE BACK END SERVER
const PORT = process.env.PORT || 3001;
app.use(cors(corsOptions));
// API URLS

app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});

// index url

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("API RUNNING");
});

app.get("/getAllData", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(loadData());
});

// get Records Count
/*THIS URL RETURNS THE NUMBER OF RECORDS IN THE FILE */

app.get("/getRecordsCount", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(count);
});

// get chemical Details using patent title
/*THIS URL RETURNS THE RECORDS HAVING THE SAME patent title 
 /****************Replace the :title with the Patent Title ********************/

app.get("/getChemicalDetailsTitle/:title", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const title = req.params.title;
  const result = getPatentDataTitle(title);

  if (result.length != 0) {
    res.status(200);
    res.send(result);
  } else {
    res.status(404);
    res.send("RESOURCE NOT FOUND ");
  }
});

// get chemical Details using chemical type
/*THIS URL RETURNS THE RECORDS HAVING THE SAME chemical type 
 /****************Replace the :chemtype with the chemical type 1 ********************/

app.get("/getChemicalDetailsChem/:chemtype", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const chem_type = req.params.chemtype;

  const result = getPatentDataChem(chem_type);

  if (result.length != 0) {
    res.status(200);
    res.send(result);
  } else {
    res.status(404);
    res.send("RESOURCE NOT FOUND ");
  }
});

// get chemical Details using patent no
/*THIS URL RETURNS THE RECORDS HAVING THE SAME chemical type
 /****************Replace the :chemtype with the chemical type 1 ********************/

app.get("/getPatentDataPatentNo/:patent_no", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  let patent_no = req.params.patent_no;

  const result = getPatentDataPatentNo(patent_no);
  console.log(result);
  if (result.length != 0) {
    res.status(200);
    res.send(result);
  } else {
    res.status(404);
    res.send("RESOURCE NOT FOUND ");
  }
});



// const addAttribute = () => {
//   let data = loadData();

//   for (var i = 0; i < data.length; i++) {
//     data[i].id = `${i}`;
//   }
//   return data;
// }

// function writeJsonFile(file, content) {
//   let jsonData = JSON.stringify(content)
//   fs.writeFileSync(file, jsonData)
// }
