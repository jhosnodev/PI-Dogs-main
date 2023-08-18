require("dotenv").config();
const { BASE_URL } = process.env;
//console.log(BASE_URL);
const getDog = async (req, res) => {
    const {breed} = req.params
  try {
    console.log(`${BASE_URL}/breeds/search?q=${breed}`);
    const response = await fetch(`${BASE_URL}/search?q=${breed}`); 
    const dog = await response.json();
    //console.log(dog);
    res.status(200).json(dog);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getDog;