require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require('axios')
//console.log(BASE_URL);
const getAllDogs = async (req, res) => {
  try {
    const { data} = await axios(BASE_URL); 
    
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getAllDogs;
