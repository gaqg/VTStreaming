var express = require('express');
var router = express.Router();

const peliculasController = require('../controllers/peliculasController');

//get movies menu
router.get('/', peliculasController.menu);
//get movies by genre
router.get('/:id', peliculasController.categoria);

module.exports = router;