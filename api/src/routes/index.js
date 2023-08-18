const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs = require('../controllers/getAllDogs');
const getTemperaments = require('../controllers/setTemperaments');
const getDog = require('../controllers/getDog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*Traer todos los perritus por raza
router.get('/dogs', (req, res)=>{
    getAllDogs(req, res)
})

//*Traer perritus por raza
router.get('/dogs/:breed', (req, res)=>{
    getDog(req, res)
})

//!Pendiente
router.get('/temperaments', (req, res)=>{
    getTemperaments(req, res)
})



module.exports = router;
