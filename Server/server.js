var express = require('express');
var socket = require('socket.io');

var app = express();

app.use(express.static("../public"));

var server = app.listen(4000,function(){
    console.log("Server Started at port 4000");
});

var io = socket(server);

io.on('connection',function(socket){
    console.log("Made socket connection " + socket.id);

    socket.on('player1Name',function(playerInfo){
        socket.broadcast.emit('player1Name',playerInfo);
    });
});