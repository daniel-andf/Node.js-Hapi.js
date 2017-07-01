var Hapi = require('hapi');
var server = new Hapi.Server();
var Inert = require('inert');


server.register(Inert, function (err) {
        if (err) throw err;
  });

server.connection({
	host:'localhost',
	port:  Number(process.argv[2] || 8080)
});

server.route({
	path:'/',
	method: 'GET',
	handler:{
		file:'index.html' 
	}
});

// start the server, handle any errors
server.start((err) => {
  if (err) {
    throw err;
  }
  // log the port and host that the server is listening on
  console.log(`server is listening on: ${server.info.uri}`);
});