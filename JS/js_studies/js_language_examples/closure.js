#!/usr/bin/env node

// Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.

function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User();

console.log( fred.login( "fred", "12Battery34!" ));

