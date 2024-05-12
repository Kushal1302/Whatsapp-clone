import { Server } from "socket.io";
import 'dotenv/config'

const PORT = process.env.PORT || 9000
const io = new Server(PORT,{
    cors:{
        origin:'https://whatsapp-clone-pi-lyart.vercel.app/'
    }
})

let users = []

const addUser = (userData , socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({...userData , socketId})
}
const getUser = (userId) => {
    return users.find(user => user.sub === userId)
}
io.on('connection' , (socket) => {
    console.log("user connected")

    socket.on("addUser" , userData => {
        addUser(userData , socket.id)
        io.emit("getUsers" , users)
    })
    socket.on('sendMessage' , data => {
        const user = getUser(data.receiverId)
        io.to(user?.socketId).emit("getMessage" , data)
    })
})
