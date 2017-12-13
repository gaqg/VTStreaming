'use strict'
//database connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'video2015',
  database: 'bddbus'
});

connection.connect(function(err) {
  if (err) {
  	console.log('unable to connect to the database :(')
  	throw err
  }
  console.log('You are now connected to the database ;)')
});

module.exports=connection;