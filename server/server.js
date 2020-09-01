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


io.on('connection', (socket) => {
    socket.on('chatroom-join', ({userName, roomCode}) => {
        console.log('A new user joined')
        socket.join(roomCode)
            console.log(roomCode)
            socket.broadcast.emit('message', {userName: 'admin', message: 'A new user has joined'})
        
    })
    
    socket.on('message', ({userName, message}) => {
        io.emit('message', {userName, message})
    })

    // socket.broadcast.emit('message', 'A new user has joined')    

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})




server.listen(port, () => {
    console.log('Server is running at ' + port)
})
