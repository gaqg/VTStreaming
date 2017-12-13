'use strict'

var db=require('../dbconnection'); //reference of dbconnection.js
 
var peliculasModel={
//queries to get data from mysql db
	getAll:function(callback){
		var sql = "SELECT rutaPortada,titulo,idPelicula,sinopsis from pelicula";
		var query = db.query(sql, callback); 
		return query;
	},

	getAllByGenre:function(id, callback){
		var sql = "SELECT rutaPortada,titulo,idPelicula,sinopsis from pelicula where idGenero = ?";
		var query = db.query(sql,[id], callback);
		return query;
	}

}
module.exports = peliculasModel;