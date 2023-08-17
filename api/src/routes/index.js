const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs = require('../controllers/getAllDogs')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', (req, res)=>{
    getAllDogs(req, res)
})


module.exports = router;
