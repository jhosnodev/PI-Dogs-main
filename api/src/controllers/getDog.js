require("dotenv").config();
const { BASE_URL, API_KEY } = process.env;
//console.log(BASE_URL);
const axios = require('axios')


//! Falta buscar en la DB 
const getDog = async (req, res) => {
    const {breed} = req.params
  try {
    console.log(`${BASE_URL}/breeds/search?q=${breed}`);
    const {data} = await axios(`${BASE_URL}/search?q=${breed}`); 
    //const dog = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getDog;