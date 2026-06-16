// Code to make a Websocket Connection
const express= require ("express");
const app=express();
const {server} = require ("socket.io");
const http= require("http");


const server= http.createServer(app);
const io = new Server(server);

io.on("connection",(socket)=>{

    socket.on('message',(data)=>{
        io.emit('new-message', data);
    })
    socket.on("disconnect",()=>{
        console.log("Disconnected from Server");
    })
})

server.listen(3000,()=>{
    console.log("Server is listening at 3000");
})