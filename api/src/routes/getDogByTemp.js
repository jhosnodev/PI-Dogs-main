require("dotenv").config();
const { getAllData } = require("../controllers/getAllDogs");

//** Buscar por ID de raza */
const getDogId = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await getAllData();
    let result = Object.values(data).filter((dog) => dog["id"] == id);
    res.status(200).json(result);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
    res.status(404).send(error.message);
  }
};

module.exports = getDogId;
