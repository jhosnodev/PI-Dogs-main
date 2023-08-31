const { Dog } = require("../db");

//! Subir relaciones de temp
const setDog = async (req, res) => {
  const data = req.body;
  console.log(data[0].name);
  try {
    const response = await Dog.findOrCreate({
      where: {
        name: data[0].name,
        imagen: data[0].imagen,
        height: data[0].height,
        weight: data[0].weight,
        bred_for: data[0].bred_for,
        life_span: data[0].life_span,
        temperament: data[0].temperament,
    
      },
    });
    const dog = await response.json();
    //console.log(dog);
    res.status(201).json(dog);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
};

module.exports = setDog;
