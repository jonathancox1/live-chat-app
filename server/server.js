const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 5000

// Middleware
app.use(express.static('../client/build'))

app.get('/', (req, res) => {
    res.render('index.html')
})

// Socket.io API
io.on('connection', (socket) => {
    socket.on('chatroom-join', ({userName, roomCode}) => {
        console.log('User joined')
        socket.join({roomCode})
        io.to({roomCode}).emit('message', {userName: 'admin', message: `${userName} has joined`})
    })
    
    socket.on('message', ({userName, message}) => {
        io.emit('message', {userName, message})
    })

    socket.on('disconnect', () => {
        io.emit('message', {userName: 'admin', message: 'An user has left'})
        console.log('User disconnected')
        socket.disconnect(true)
    })
})




server.listen(port, () => {
    console.log('Server is running at ' + port)
})
