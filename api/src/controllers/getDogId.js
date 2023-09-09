require("dotenv").config();
const { getAllData } = require("./getAllDogs");

//** Buscar por ID de raza */
const getDogId = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await getAllData();
    let result = Object.values(data).filter((dog) => dog["id"] == id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = getDogId;
