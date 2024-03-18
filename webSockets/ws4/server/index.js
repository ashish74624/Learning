import express from 'express'
import { Server } from "socket.io"
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.join(__dirname, "public")))

const expressServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

const io = new Server(expressServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
    }
})

io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    //Upon connection -- only to the user
    socket.emit('message','Welcome to Chat app');

    //Upon connection -- to everyone except the user
    socket.broadcast.emit('message', `${socket.id.substring(0, 5)} connected` )

    //Listening for messages
    socket.on('message', data => {
        console.log(data)
        io.emit('message', `${socket.id.substring(0, 5)}: ${data}`)
    })

    //When user disconnects -- we are using a Listner here
    socket.on('disconnect', ()=>{
        socket.broadcast.emit('message', `${socket.id.substring(0, 5)} disconnected` )
    })

    // Listen for activity
    socket.on('activity',(name)=>{
        socket.broadcast.emit('activity',name)
    })
})