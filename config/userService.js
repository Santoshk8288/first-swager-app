
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cedrick', {useNewUrlParser: true});
// Genre Schema
const userSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports.createUser = function(user, callback){
	User.create(user, callback)
}

module.exports.getAllUsers = function(callback){
	User.find(callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.loginUser = function(user, callback){
	var query = {email: user.email, password:user.password}
	User.find(query, callback);
}

module.exports.updateUser = function(user, callback){
	var find = {'_id': user.id}
	var set = {$set:{first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password}}
	User.updateOne(find, set, {upsert: true}, callback)
}

module.exports.deleteUser = function(id, callback){
	var query = {'_id':id}
	User.deleteOne(query, callback) 
}


