var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController') //importamos el controlador en esta linea 
/* GET home page. */
router.get('/', mainController.index) //se crea la ruta y se usa el controlador con el metodo index 

module.exports = router;

