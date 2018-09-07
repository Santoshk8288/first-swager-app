'use strict;'
//Include crypto to generate the movie id
var crypto = require('crypto');

module.exports = function() {
	return {
		userList : [],
		/*
		 * Save the user inside the "db".
		 */
		createUser(user) {
			user.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
			user.online = false
			this.userList.push({id:user.id, title:user.title, password: user.password, online:false});
			return 1;            
		},
		/*
		 * Retrieve a user with a given id or return all the movies if the id is undefined.
		 */
		getUserById(id) {
			if(id) {
				return this.userList.find(element => {
					return element.id === id;
				});    
			}
			else {
				return this.userList;
			}
		},
		/*
		 * Delete a user with the given id.
		 */
		deleteUser(id) {
			var found = 0;
			this.userList = this.userList.filter(element => {
					if(element.id === id) {
						found = 1;
					}
					else {
						return element.id !== id;
					}
				});
			return found;            
		},
		/*
		 * Update a user with the given id
		 */
		updateUser(id, user) {
			var userIndex = this.userList.findIndex(element => {
				return element.id === id;
			});
			if(userIndex !== -1) {
				this.userList[userIndex].title = user.title;
				this.userList[userIndex].password = user.password;
				return 1;
			}
			else {
				return 0;
			}
		},

		/*
		 * Login user	
		 */
		loginUser(user) {
			var userIndex = this.userList.findIndex(element => {
				return (element.title === user.title && element.password === user.password);
			});
			if(userIndex !== -1) {
				this.userList[userIndex].online = true
				return this.userList[userIndex]
			}
			else {
				return 0;
			}
		},

		/*
		 * Login user	
		 */
		logoutUser(id) {
			var userIndex = this.userList.findIndex(element => {
				return element.id === id;
			});
			if(userIndex !== -1) {
				this.userList[userIndex].online = false
				return this.userList[userIndex]
			}
			else {
				return 0;
			}
		} 
		         
	}
};  