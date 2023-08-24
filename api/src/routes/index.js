const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllDogs = require("../controllers/getAllDogs");
const getDog = require("../controllers/getDog");

const setTemperaments = require("../controllers/setTemperaments");
const setDog = require("../controllers/setDog");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*Traer todos los perritus por raza
router.get("/dogs", getAllDogs);

//*Traer perritus por raza
router.get("/dogs/:breed", getDog);

//*Funciona pero falta subir antes los temps
router.get("/temperaments", setTemperaments);

//! Create dogs
router.post("/dogs", setDog);

module.exports = router;
