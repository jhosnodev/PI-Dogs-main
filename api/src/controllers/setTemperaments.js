require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const setTemperaments = async (req, res) => {
  try {
    const { data } = await axios.get(BASE_URL);
    const temps = data
      .map((dog) => (dog.temperament ? dog.temperament : "Sin informacion"))
      .map((dog) => dog?.split(", "));
    let setTemps = [...new Set(temps.flat())];
    setTemps.forEach( (tempe) => {
      if (tempe) {
         Temperament.findOrCreate({
          where: { name: tempe },
        });
      }
    });
    setTemps = await Temperament.findAll();
    res.status(200).json(setTemps);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports =  setTemperaments ;
