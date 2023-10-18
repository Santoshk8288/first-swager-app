	var User = require('../../config/userService');
	module.exports = {getAllUsers, createUser, getUserById, updateUser, deleteUser, loginUser, logoutUser};
	
	
	function createUser(req, res, next) {
		var user = req.body
		User.createUser(user, function(err, user){
			if(err){
				res.status(204).send();
			}
			else{
				if(user){
					res.json(user)
				}
				else{
					res.json('User cannot be created')
				}
			}
		})
	}

	function getAllUsers(req, res, next) {
	  User.getAllUsers(function(err, user){
	  	if(err){
				res.status(204).send();
			}
			else{
				if(user){
					res.json(user)
				}
				else{
					res.json('no user found')
				}
			}
	  })
	}
	
	function getUserById(req, res, next) {
		var id = req.swagger.params.id.value; 
		User.getUserById(id, function(err, user){
			if(err){
				res.status(204).send();
			}
			else{
				if(user){
					res.json(user)
				}
				else{
					res.json('no user found')
				}
			}
		});
	}
	
	function loginUser(req, res, next){
		var user = req.body
		User.loginUser(user, function(err, user){
			if(err){
				res.status(204).send();
			}
			else{
				if(user){
					res.json(user)
				}
				else{
					res.json('no user found')
				}
			}
		})
	}

	function deleteUser(req, res, next) {
		var id = req.body.id; 
		User.deleteUser(id, function(err, user){
			if(err){
				res.status(204).send();
			}
			else{
				if(user){
					res.json(user)
				}
				else{
					res.json('user not deleted')
				}
			}
		})
	}
	
	function updateUser(req, res, next) {
		var user = req.body
		User.updateUser(user, function(err, user){
			if(err){
				res.status(204).send();
			}
			else{
				if(user){
					
					res.json(user)
				}
				else{
					res.json('user not updated')
				}
			}
		})
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

