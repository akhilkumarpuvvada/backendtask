// Import the readFileSync from Node JS file system module
const { readFileSync } = require("fs");
// THE BELOW FUNCTION PARSING THE DATA  FROM FILE AND RETURNING IT 
let loadData = () => JSON.parse(readFileSync("./chemical_type.json"));
// IMPORTING THE FUNCTION 
module.exports = { loadData };
