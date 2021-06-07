var express = require('express');
var socket = require('socket.io');
const dotenv = require('dotenv');

var app = express();

app.use(express.static("../public"));

dotenv.config();

var server = app.listen(process.env.PORT || 4000,function(){
    console.log("Server Started at port 4000");
});

var io = socket(server);

io.on('connection',function(socket){
    console.log("Made socket connection " + socket.id);

    socket.on('player1Name',function(playerInfo){
        socket.broadcast.emit('player1Name',playerInfo);
    });

    socket.on('player2Name',function(playerInfo){
        socket.broadcast.emit('player2Name',playerInfo);
    });

    socket.on('launch',function(playerInfo){
        io.sockets.emit('launch',playerInfo)
    });

    socket.on('gameplay',function(playerInfo){
        io.sockets.emit('gameplay',playerInfo)
    });

    socket.on('playermove',function(playerInfo){
        io.sockets.emit('playermove',playerInfo)
    });
});