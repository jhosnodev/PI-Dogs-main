const { Temperament } = require("../db");


const getTemperaments = async (req, res) => {
  try {
    const tempHosted = await Temperament.findAll();
    //const result = await tempHosted.json();
    console.log()
    console.log(tempHosted)
    //console.log(result);
    //res.status(200).json(result);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};
module.exports = getTemperaments;
