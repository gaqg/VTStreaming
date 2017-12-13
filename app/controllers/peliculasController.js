'use strict'
var express = require('express');



function menu(req, res, next) {
  res.render('apartados/peliculas');
}

function categoria(req, res, next) {
	//req.params.id get id from url

	
res.render("apartados/peliculas/listaPeliculas");

}



module.exports = {
	menu,
	categoria
};