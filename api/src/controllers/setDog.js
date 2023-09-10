const { Dog, Temperament } = require("../db");
const axios = require("axios");

//! Subir relaciones de temp
const setDog = async (req, res) => {
  const { name, bred_for, height, weight, life_span, temperament } = req.body;

  /* console.log({ name, bred_for, height, weight, life_span, temperament }); */

  if (name && height && weight && life_span && bred_for && temperament) {
    try {
      image = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(image);
    } catch (error) {
      console.log(error);
    }
    /* console.log(name) */
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
        where: { id: temp.value },
      });
     /*  console.log(temperament[0].value);
      console.log(findTemp); */
      createDog.addTemperament(findTemp);
    });

        console.log(createDog);

    res.status(200).send(createDog);
  } else {
    res.status(404).send("Data needed to proceed is missing");
  }
};

module.exports = setDog;

const postdog = async (req, res) => {
  var {
    // takes these properties to build the new dog
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    temperament,
    image,
  } = req.body;

  if (!image) {
    try {
      image = await (
        await axios.get("https://dog.ceo/api/breeds/image/random")
      ).data.message;
    } catch (error) {
      console.log(error);
    }
  }

  if (
    name &&
    height_min &&
    height_max &&
    weight_min &&
    weight_max &&
    temperament &&
    image
  ) {
    // takes that data for the new dog
    const createDog = await Dog.create({
      name: name,
      height_min: parseInt(height_min),
      height_max: parseInt(height_max),
      weight_min: parseInt(weight_min),
      weight_max: parseInt(weight_max),
      life_span: life_span,
      image: image || "https://dog.ceo/api/breeds/image/random",
    });
    temperament.map(async (el) => {
      const findTemp = await Temperament.findAll({
        where: { name: el },
      });
      createDog.addTemperament(findTemp);
    });
    res.status(200).send(createDog);
  } else {
    res.status(404).send("Data needed to proceed is missing");
  }
};
