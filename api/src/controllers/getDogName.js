require("dotenv").config();
const { BASE_URL } = process.env;
//console.log(BASE_URL);
//! Falta buscar en la DB
//*Buscar por nombre de raza  */
const getDogName = async (name) => {
  try {
    console.log(`${BASE_URL}/breeds/search?q=${breed}`);
    const response = await fetch(`${BASE_URL}/search?q=${breed}`);
    const dog = await response.json();
    //console.log(dog);
    //return values
  } catch (error) {
    return { error: error };
  }
};

module.exports = getDogName;
