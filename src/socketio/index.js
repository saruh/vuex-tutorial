//
// http://socket.io/docs/
//
var app = module.parent.exports
var http = require('http').Server(app)
var io = require('socket.io').listen(http)

function onConnect (socket) {
  console.log('A user connected!', socket.id)

  socket.on('message from client to server', function (msg) {
    console.log('message from client to server')
    io.sockets.emit('message from server to clients', msg)
  })
}

io.sockets.on('connection', onConnect)

module.exports = http
