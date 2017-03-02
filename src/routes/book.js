/**
 * ROUTES !
 * Hapi Js has a plugin system which are registered using "exports"
 * A plugin should have a "register" function, accepting three parameters.
 * 1. server. i.ethe server object.
 * 2. options: user passed options into the method.
 * 3. next : a function that has to be invoked AFTER plugin resitration is DONE.
 *
 * Attributes: ==>=>======>  extra information about your plugin.
 *
 * When complete, this plugin has to be Registered inside server.js
 * 
 **/

'use strict';

import Boom from 'boom';
import uuid from 'uuid';
import Joi from 'joi';


//every HAPI plugin has to have a register method.
exports.register = function(server, options, next) {
	const db = server.app.db;

	if(db) {
		console.log("yes");
	}
	else {
		console.log("No!!!!");
	}

	console.log(db);

	// console.log(db);

	/******** LETS DO ROUTES *********/

	server.route({
		method: 'GET',
		path: '/books',
		handler: function (request,reply) {
			db.hapi-books.find((err, docs)=> {
				if(err) {
					return reply(Boom.wrap(err, 'Internal MongoDB error!'));
				}

				reply(docs);
			});
		}
	});

	//when we are done with this, we have to invoke the function passed to the next parameters.
	return next();	
};

exports.register.attributes = {
	
	name: 'routes-books'
		
};
