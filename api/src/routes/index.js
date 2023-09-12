const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const getDog = require("./getDogs");

const setTemperaments = require("./setTemperaments");
const setDog = require("./setDog");
const getDogId = require("./getDogById");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*Traer todos los perritus por raza
router.get("/dogs", getDog);

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
