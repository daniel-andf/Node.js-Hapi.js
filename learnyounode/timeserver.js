
const net = require('net')

function zeroFill (i) {
 
  if (i < 10)
  	return '0' + i
  else
  	return '' + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))