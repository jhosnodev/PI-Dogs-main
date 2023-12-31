require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const dogs = require("./pivot");

//*Buscar todos los perros y devolver un arreglo
/// esta funcion limpia la data de la api y alimenta el resto de las funciones que devuelven respuestas a las rutas de consulta

const allDogsApi = async () => {
  try {
    /*     const { data } = await axios(BASE_URL); */

    const result = dogs.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        bred_for: dog.bred_for,
        origin: dog.origin,
        temperaments: dog.temperament
          ? dog.temperament.split(", ").map((temp) => {
              return { name: temp };
            })
          : "unknow",
      };
    });
    return result;
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

    return allDogsDb;
  } catch (error) {
    console.error(`Download error: ${error.message}`);
    return { error: error };
  }
};

const getAllData = async () => {
  /*   const name = req.query.name; */
  const resultApi = await allDogsApi();
  const result = await allDogs();

  return result.concat(resultApi);
};
module.exports = getAllData;
