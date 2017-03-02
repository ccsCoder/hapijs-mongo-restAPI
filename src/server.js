'use strict';

import Hapi from 'hapi';
import mongojs from 'mongojs';

// We could've used our require function from commonjs but then, we love ECMAScript 6. Let's go.
// 


//create a new server
const server = new Hapi.Server();


//define server properties
server.connection( {
	"port": 3000
});

//we store the DB connection in server object because we need to access this from a multitude of places.
server.app.db = mongojs('mongodb://localhost:27017',['hapi-books']);

//load my plugins and start the server.
server.register([
	require('./routes/book')		//Pull this guy.
], (err)=> {
	if(err) {
		throw err;
	}
});





server.start((err)=> {

	if(err) {
		//do crazy stuff here
		console.error('	ERROR!');
		console.error(err);	
	}
	/*
		server.info property contains an object which contains the following information:
		created - the time the server instance was created;
		started - the time the server instance was started;
		host - the hostname of the machine;
		port - the port to which the server the server is listening ;
		protocol - the protocol on which the server is operating;
		id - a unique ID of the server instance;
		uri - the complete URI of the current server instance;
		address - the address the server is bound to
	 */
	console.log('Server started ...');
});







