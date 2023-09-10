const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllDogs } = require("../controllers/getAllDogs");
const getDog = require("../controllers/getDog");

const setTemperaments = require("../controllers/setTemperaments");
const setDog = require("../controllers/setDog");
const getDogId = require("../controllers/getDogId");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*Traer todos los perritus por raza
router.get("/dogs", getAllDogs);

//*Traer perritus por ID
router.get("/dogs/:id", getDogId);

//*Funciona 
router.get("/temperaments", setTemperaments);

//* Create dogs
router.post("/dogs", setDog);

//! Update dogs
router.post("/dogs", setDog);

//! Delete dogs
router.post("/dogs", setDog);

module.exports = router;
