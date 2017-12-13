// Routes
'use strict'

const express = require('express');
const apiController = require('../controllers/api');
const router = express.Router();

/* GET to obtain movies by genre */
router.get('/movieByGenre',apiController.getAllByGenre);

router.get('/movieAll',apiController.getAll);

/* GET para obtener un usuario segun su id */
//router.get('/users/me',apiController.getMe);

/* GET para obtener un usuario segun su id */
//
/* GET para obtener un usuario segun su id */
//router.get('/projects/current',apiController.getCurrentProject);

//router.get('/userStories/current',apiController.getCurrentUsersStories);

module.exports = router;