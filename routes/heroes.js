var express = require('express');
var router = express.Router();
const heroeController = require('../controllers/heroeController')
/* GET home page. */
router.get('/', heroeController.index)
router.get('/detalle/:id', heroeController.detalle)
// para poder ingresar localhost:3000/heroes/detalle/2 
router.get('/bio/:id/:ok?', heroeController.bio)

module.exports = router;

