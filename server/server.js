const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

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
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('An user disconnected')
    })
})



server.listen(port, () => {
    console.log('Server is running at ' + port)
})
