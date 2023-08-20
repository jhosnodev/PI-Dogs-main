const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllDogs = require("../controllers/getAllDogs");
const getDog = require("../controllers/getDog");
const getTemperaments = require("../controllers/getTemperaments");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*Traer todos los perritus por raza
router.get("/dogs", getAllDogs);

//*Traer perritus por raza
router.get("/dogs/:breed", getDog);

//!Pendiente
router.get("/temperaments", getTemperaments);

module.exports = router;
