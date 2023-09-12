const getAllData = require("../controllers/getAllDogs");

const getAllDogs = async (req, res) => {
  const name = req.query.name;
  try {
    const allMyDogs = await getAllData();

    if (name) {
      let resultName = Object.values(allMyDogs).filter((dog) =>
        dog["name"]?.toLowerCase().includes(name.toLowerCase())
      );
      res.status(200).send(resultName);
    } else {
      res.status(200).send(allMyDogs);
    }
  } catch (error) {
    console.error(`Download error: ${error.message}`);
    res.status(404).send(error.message);
  }
};

module.exports = getAllDogs;
