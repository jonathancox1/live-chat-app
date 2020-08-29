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
    socket.on('chatroom-join', ({userName, roomCode}, callbackFn) => {
        const {error, user} = addUser({id: socket.id, userName, roomCode})
 
        if (error) return callbackFn(error)
        socket.join(user.roomCode)
        console.log(user)
        console.log(socket.id)
        console.log('zzzzzzzzz')

        socket.emit('message', {user: 'admin', text:`${user.userName}, welcome to the room ${user.roomCode}`})
        socket.broadcast.to(user.roomCode).emit('message', {user: 'admin', text: `${user.userName}, has joined`})


        // callbackFn()
    })

    // socket.on('sendMessage', ({message, userName, roomCode}, callbackFn) => {
    //     const user = getUser(socket.id)
    //     console.log(socket.id)

    //     io.to(user.roomCode).emit('message', {user: user.userName, text: message})
        
    //     callbackFn()
    // })

    socket.on('disconnect', () => {
        console.log('An user disconnected')
    })
})




server.listen(port, () => {
    console.log('Server is running at ' + port)
})
