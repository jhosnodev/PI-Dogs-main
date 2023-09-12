require("dotenv").config();
const { BASE_URL, API_KEY } = process.env;
const axios = require("axios");

//* buscar por BREED por API ??????
const getDogByBreed = async (req, res) => {
  const { breed } = req.params;
  try {
    const { data } = await axios(`${BASE_URL}/search?q=${breed}`);
    res.status(200).json(data);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
    res.status(404).send(error.message);
  }
};

module.exports = getDogByBreed;
