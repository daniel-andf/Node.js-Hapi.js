var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	host:'localhost',
	port:  Number(process.argv[2] || 8080)
});

server.route({
	path:'/{name}',
	method: 'GET',
	handler: getInputName
});

function getInputName (request,reply){
	reply('Hello '+request.params.name);
}

// start the server, handle any errors
server.start((err) => {
  if (err) {
    throw err;
  }
  // log the port and host that the server is listening on
  console.log(`server is listening on: ${server.info.uri}`);
});