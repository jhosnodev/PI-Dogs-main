require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");

//** Buscar por ID de raza */
const getDogId = async (req, res) => {
  const { breed } = req.params;
  try {
    /*    console.log(`${BASE_URL}/search?q=${breed}`); */
    const { data } = await axios(`${BASE_URL}/search?q=${breed}`);
    /*    console.log(data); */
    res.status(200).json(data);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getDogId;
