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
        players.x = player.x;
        players.y = player.y;
        players.pos = player.pos;
        players.count = player.count;
        players.flag = player.flag;
        players.turn = player.turn;
        players.currPlayerId = socket.id;
        io.sockets.emit('playermove',players);
    });

    socket.on('disconnect',function(){
        console.log('user disconnected');
        let playerName;
        players.playerDetails.forEach(element => {
            if(element.id === socket.id){
                playerName = element.name;
            }
        });
        players.deletePlayer(socket.id);
        console.log(playerName);
        io.sockets.emit('disconnected',{players:players,disconnectedPlayer : playerName});
    });

    socket.on('connected',function(){
        console.log('user connected');
        io.sockets.emit('connected');
    });
});