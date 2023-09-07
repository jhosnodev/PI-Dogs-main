require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Dog, Temperament } = require("../db");
//console.log(BASE_URL);

//*Buscar todos los perros o buscar por nombre de raza
const getAllDogs = async (req, res) => {
  const { name } = req.query;
  const resultApi = await allDogsApi();
  const result = await allDogs();
  console.log(resultApi);
  if (name) {
    let resultName =   result.filter(
      (dog) => dog["name"].toLowerCase() == name.toLowerCase()
    );
    console.log(resultName);
    if (!resultName) {
      console.log('entro');
      resultName = resultApi.filter(
        (dog) => dog["name"].toLowerCase() == name.toLowerCase()
      );
    }
    console.log(resultName);
    res.status(200).send({...result, ...resultApi});
  } else {
    res.status(200).json(result);
    /*  res.status(200).send({...result}); */
  }
};

const allDogsApi = async () => {
  try {
    const { data } = await axios(BASE_URL);
    /* console.log(data); */
    return data;
  } catch (error) {
    return { error: error };
  }
 
};
const allDogs = async () => {
  try {
    const allDogsDb = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    console.log(allDogsDb);
    return allDogsDb;
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};
module.exports = getAllDogs;
