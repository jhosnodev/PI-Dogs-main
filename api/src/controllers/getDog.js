require("dotenv").config();
const { BASE_URL, API_KEY } = process.env;

const axios = require("axios");

//! Falta buscar en la DB
//* buscar por ID para detail
const getDog = async (req, res) => {
  const { breed } = req.params;
  try {
    const { data } = await axios(`${BASE_URL}/search?q=${breed}`);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getDog;
