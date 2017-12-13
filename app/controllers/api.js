// Controller

'use strict'
const express = require('express');
var peliculasModel = require("../models/peliculasModel");

var db=require('../dbconnection'); //reference of dbconnection.js

// function getAllUsers(req, res, next){
//   logger.debug('GET ALL USERS');
//   if(req.isAuthenticated()){
//     //TODO refact
//     User.find((err, users) => {   EXAMPLE FROM A SIMILAR USING MONGODB
//       res.json(users);
//     });
//   } else {
//     res.send(403);
//   }
// }

function getAll(req, res, next){
	peliculasModel.getAll(function(err,peliculas){
 
		if(err)
		  {
		  	res.json(err);
		  }
		  else{
		  	
		  
		  	res.json(peliculas);
		  	
		  }
		}
	);
}

function getAllByGenre(req, res, next){
	peliculasModel.getAllByGenre(req.params.id, function(err,peliculas){
 
		if(err)
		  {
		  	res.json(err);
		  }
		  else{
		  	
		  	res.json(peliculas);
		  	
		  }
		}
	);
}

module.exports = {
	getAll,
	getAllByGenre
};