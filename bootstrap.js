//This file is being invoked from scripts/start from package.json.


require('babel-core/register');
require('./src/server.js');		//call server from here, after loading babel.
