require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");
//console.log(BASE_URL);
const getAllDogs = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    const { data } = await axios(BASE_URL);
    if (name) {
      const nameFilter = data.filter((dog) => dog.name === name);
      /*       console.log(nameFilter.length); */
      nameFilter.length
        ? res.status(200).json(nameFilter)
        : res.status(204).send("There no dogs to show");
    } else {
      /*   console.log(data); */
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getAllDogs;
