'use strict';
	// Include our "db"
	var db = require('../../config/userService')();
	// Exports all the functions to perform on the db
	module.exports = {getAll, createUser, getUserById, updateUser, deleteUser, loginUser};

	//GET /movie operationId
	function getAll(req, res, next) {
	  res.json({ movies: db.getUserById()});
	}
	//POST /movie operationId
	function createUser(req, res, next) {
		res.json({success: db.createUser(req.body), description: "User added to the list!"});
	}
	//GET /movie/{id} operationId
	function getUserById(req, res, next) {
		var id = req.swagger.params.id.value; //req.swagger contains the path parameters
		var user = db.getUserById(id);
		if(user) {
			res.json(user);
		}else {
			res.status(204).send();
		}        
	}
	//PUT /movie/{id} operationId
	function updateUser(req, res, next) {
		var id = req.swagger.params.id.value; //req.swagger contains the path parameters
		var user = req.body;
		if(db.updateUser(id, user)){
			res.json({success: 1, description: "Movie updated!"});
		}else{
			res.status(204).send();
		}
	}
	//DELETE /movie/{id} operationId
	function deleteUser(req, res, next) {
		var id = req.swagger.params.id.value; //req.swagger contains the path parameters
		if(db.deleteUser(id)){
			res.json({success: 1, description: "Movie deleted!"});
		}else{
			res.status(204).send();
		}
	}

	function loginUser(req, res, next){
		var user = req.body;
		res.json({ movies: db.loginUser(user)});
	}