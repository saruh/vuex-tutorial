import Socketio from 'socket.io-client'

var socketioServer = 'http://localhost:8080'
var socket = null

export const create = ({dispatch, state}) => {
  if (socket != null) { return }

  // Create & Connect
  socket = Socketio(socketioServer)

  socket.on('connect', function () {
    console.log('connected', socket)
  })

  socket.on('disconnect', function () {
    console.log('disconnected')
    socket = null
  })

  socket.on('message from server to clients', function (msg) {
    console.log('message from server to clients', msg)
    dispatch('CHAT_POST', msg)
  })
}

// Client -> Server
export const sendMessage = ({dispatch, state}, msg) => {
  console.log('socket-actions.sendMessage:', msg)
  socket.emit('message from client to server', msg)
}

export const disconnect = () => {
  socket.disconnect()
}
