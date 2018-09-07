'use strict';
	var db = require('../../config/userService')();
	module.exports = {getAllUsers, createUser, getUserById, updateUser, deleteUser, loginUser, logoutUser};
	
	function getAllUsers(req, res, next) {
	  res.json({ users: db.getUserById()});
	}
	
	function createUser(req, res, next) {
		res.json({success: db.createUser(req.body), description: "User added to the list!"});
	}
	
	function getUserById(req, res, next) {
		var id = req.swagger.params.id.value; 
		var user = db.getUserById(id);
		if(user) {
			res.json(user);
		}else {
			res.status(204).send();
		}        
	}
	
	function updateUser(req, res, next) {
		var id = req.body.id;
		if(db.updateUser(id,req.body)){
			res.json({success: 1, description: "user updated!"});
		}else{
			res.status(204).send();
		}
	}
	
	function deleteUser(req, res, next) {
		var id = req.body.id; 
		if(db.deleteUser(id)){
			res.json({success: 1, description: "user deleted!"});
		}else{
			res.status(204).send();
		}
	}

	function loginUser(req, res, next){
		var user = db.loginUser(req.body)
		if(user) {
      res.json(user);
    }else {
      res.status(204).send();
    } 
	}

	function logoutUser(req, res, next){
		var user = db.logoutUser(req.body.id)
		if(user){
			res.json(user)
		}
		else{
			res.status(204).send()
		}
	}

