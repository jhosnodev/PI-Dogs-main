const { Dog, Temperament } = require("../db");
const axios = require("axios");

const setDog = async (req, res) => {
  const { name, bred_for, height, weight, life_span, temperament } = req.body;

  if (name && height && weight && life_span && bred_for && temperament) {
    try {
      image = await axios.get("https://dog.ceo/api/breeds/image/random");
    } catch (error) {
      console.log(error);
    }
    

    const createDog = await Dog.create({
      name: name,
      height: height,
      weight: weight,
      life_span: life_span,
      bred_for: bred_for,
      image: image.data.message,
    });
    temperament.map(async (temp) => {
      const findTemp = await Temperament.findAll({
        where: { name: temp },
      });

      createDog.addTemperament(findTemp);
    });

    res.status(200).send(createDog);
  } else {
    res.status(404).send("Data needed to proceed is missing");
  }
};

module.exports = setDog;
