var express = require('express');
var socket = require('socket.io');
const dotenv = require('dotenv');
var Players = require('./public/js/classes/Players');

var app = express();

app.use(express.static("public"));

dotenv.config();

var server = app.listen(process.env.PORT || 4000,function(){
    console.log("Server Started at port 4000");
});

var isHost = 0,players;

var io = socket(server);

io.on('connection',function(socket){
    console.log("Made socket connection " + socket.id);
    isHost++;
    if(isHost === 1){
        players = new Players();
    }
    players.addPlayer(socket.id,null,null,null,false,isHost === 1);

    socket.on('player1Name',function(playerInfo){
        players.updatePlayer(null,playerInfo.name,playerInfo.selectedCharacter,playerInfo.layout,playerInfo.isReady,null,0);
        socket.broadcast.emit('player1Name',players);
    });

    socket.on('player2Name',function(playerInfo){
        players.updatePlayer(null,playerInfo.name,playerInfo.selectedCharacter,playerInfo.layout,playerInfo.isReady,null,1);
        socket.broadcast.emit('player2Name',players);
    });

    socket.on('launch',function(){
        players.layout = players.layoutChooser();
        io.sockets.emit('launch',players);
    });

    socket.on('gameplay',function(){
        io.sockets.emit('gameplay',players);
    });

    socket.on('playermove',function(player){
        players = player;
        io.sockets.emit('playermove',players);
    });

    socket.on('disconnect',function(){
        console.log('user disconnected');
        io.sockets.emit('disconnected',players);
    });

    socket.on('connected',function(){
        console.log('user connected');
        io.sockets.emit('connected');
    });
});