// Import the readFileSync from Node JS file system module

const { readFileSync } = require("fs");
const Data = JSON.parse(readFileSync("./chemical_type.json"));



//FUNCTION TO GET PATENT DETAILS FROM DATABASE USING CHEMICAL NAME AS PARAMS

/*the below function is getting chemical name as a paramter and is return records 
  having the same chemical name
*/

const getPatentDataChem = (chem_name) => {
  let result = [];
  Data.forEach((element, index) => {
    if (element["chemical_type_1"] === chem_name) {
      result.push(element);
    } else {
    }
  });
  return result;
};

//FUNCTION TO GET PATENT DETAILS FROM DATABASE USING TITLE AS PARAMS


/*
The below function is getting patent title as a paramter and is return records
having the same patent title

*/


const getPatentDataTitle = (title) => {
  let result = [];
  Data.forEach((element, index) => {
    if (element["patent_title"] === title) {
      result.push(element);
    } else {
    }
  });
  return result;
};
//FUNCTION TO GET PATENT DETAILS FROM DATABASE USING PATENT NO AS PARAMS

/*the below function is getting patent no as a paramter and is return records
having the same patent no

*/


const getPatentDataPatentNo = (patent_no) => {
  let result = [];
  Data.forEach((element, index) => {
    if (element["patent_no"] === patent_no) {
      result.push(element);
    } else {
    }
  });
  return result;
};

module.exports = {
  getPatentDataChem,
  getPatentDataTitle,
  getPatentDataPatentNo,
};
