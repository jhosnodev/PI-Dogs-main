require("dotenv").config();
const { BASE_URL } = process.env;
//console.log(BASE_URL);
const getAllDogs = async (req, res) => {
  try {
    const response = await fetch(BASE_URL); 
    const dogs = await response.json();
    //console.log(dogs);
    res.status(200).json(dogs);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getAllDogs;
