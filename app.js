const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use('/', require('./routes/index'))

io.on('connection', socket => {
    console.log('Socket connection')

    socket.emit("message", 'test')
    
    socket.on('disconnect', () => {
        console.log('Disconnect')
    });

    socket.on('chatMessage', data => {
        console.log(data)
        io.emit('message', data.message)
    })
});

const PORT = 3001 || process.env.PORT

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})