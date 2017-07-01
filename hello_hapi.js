var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	host:'localhost',
	port:  Number(process.argv[2] || 8080)
});

server.route({
	path:'/',
	method: 'GET',
	handler: start_hello
});

function start_hello (request,reply){
	reply('Hello hapi');
}

// start the server, handle any errors
server.start((err) => {
  if (err) {
    throw err;
  }
  // log the port and host that the server is listening on
  console.log(`server is listening on: ${server.info.uri}`);
});