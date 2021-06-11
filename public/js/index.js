$(function() {
    $( "#glow" ).draggable();
});

var player,avatar;

socket.on('gameplay',function(playerInfo){
    player = playerInfo;
    avatar = player.playerDetails[0].character;
    document.getElementById("player").innerHTML = `${player.playerDetails[0].name} Turn`;
});

var canvas,ctx;
var turn = 1,
flag = [
    [{
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }],
    [{
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }],
    [{
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }, {
        status: 0,
        avatar: 0
    }]
];

function checkMove(x, y) {
    // console.log(player.currPlayerId,player.playerDetails[0].id,player.playerDetails[1].id,player.turn);
    // console.log(!((player.currPlayerId == player.playerDetails[0].id && player.turn == 1) || (player.currPlayerId == player.playerDetails[1].id && player.turn == 2)));
    if(!((player.currPlayerId == player.playerDetails[0].id && player.turn == 1) || (player.currPlayerId == player.playerDetails[1].id && player.turn == 2))){
        return -1;
    }
    var temp = [],
        valid = 0;
    if (y == x)
        temp.push({
            line: "y=x",
            success: 0,
            x1: 0,
            y1: 0,
            x2: 600,
            y2: 600
        });
    if (x == 0)
        temp.push({
            line: "x=0",
            success: 0,
            x1: 100,
            y1: 0,
            x2: 100,
            y2: 600
        });
    if (x == 1)
        temp.push({
            line: "x=1",
            success: 0,
            x1: 300,
            y1: 0,
            x2: 300,
            y2: 600
        });
    if (x == 2)
        temp.push({
            line: "x=2",
            success: 0,
            x1: 500,
            y1: 0,
            x2: 500,
            y2: 600
        });
    if (y == 0)
        temp.push({
            line: "y=0",
            success: 0,
            x1: 0,
            y1: 100,
            x2: 600,
            y2: 100
        });
    if (y == 1)
        temp.push({
            line: "y=1",
            success: 0,
            x1: 0,
            y1: 300,
            x2: 600,
            y2: 300
        });
    if (y == 2)
        temp.push({
            line: "y=2",
            success: 0,
            x1: 0,
            y1: 500,
            x2: 600,
            y2: 500
        });
    if (y == -x + 2)
        temp.push({
            line: "y=-x+2",
            success: 0,
            x1: 600,
            y1: 0,
            x2: 0,
            y2: 600
        });
    temp.forEach(element => {
        var tempFlag = [];
        for (i = 0; i < 3; i++) {
            if (element.line == "y=x")
                tempFlag.push(player.flag[i][i].avatar);
            if (element.line == "x=0")
                tempFlag.push(player.flag[i][0].avatar);
            if (element.line == "x=1")
                tempFlag.push(player.flag[i][1].avatar);
            if (element.line == "x=2")
                tempFlag.push(player.flag[i][2].avatar);
            if (element.line == "y=0")
                tempFlag.push(player.flag[0][i].avatar);
            if (element.line == "y=1")
                tempFlag.push(player.flag[1][i].avatar);
            if (element.line == "y=2")
                tempFlag.push(player.flag[2][i].avatar);
            if (element.line == "y=-x+2")
                tempFlag.push(player.flag[-i + 2][i].avatar);
        }
        
        if (allEqual(tempFlag)) {
            canvas.style.zIndex = "3";
            valid = 1;
            element.success = 1;
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.moveTo(element.x1, element.y1);
            ctx.lineTo(element.x2, element.y2);
            ctx.stroke();
            return;
        }
    });
    if (valid)
        return 1;
    else
        return 0;
}

const allEqual = arr => arr.every(v => ((v === arr[0]) && (v !== 0)))

function hide() {
    window.location.reload(true);
}

var count = 0;

socket.on('playermove',function(gameInfo){
    player = gameInfo;
    if (player.flag[player.y][player.x].status == 0) {
        let checkMoveVal = checkMove(player.x, player.y, player.turn);
        if(player.mode === `mpm` && checkMoveVal == -1){
            let playerName;
            if(player.turn == 1){
                playerName = player.playerDetails[0].name;
            } else {
                playerName = player.playerDetails[1].name;
            }
            tWrapper.append(toast(`${playerName}'s Turn`,1));
            $(`#t${ti - 1}`).toast({
                delay: 2000
            });
            $(`#t${ti - 1}`).toast('show');
            console.log(player);
            return;
        }
        console.log(player);
        if (player.turn == 1) {
            document.getElementById("player").innerHTML = `${player.playerDetails[1].name} Turn`;
        } else {
            document.getElementById("player").innerHTML = `${player.playerDetails[0].name} Turn`;
        }
        document.querySelectorAll(".block")[player.pos].innerHTML = `<img class="player" src='./img/${avatar}.png'>`;
        player.flag[player.y][player.x].status = 1;
        player.flag[player.y][player.x].avatar = player.turn;
        if (checkMove(player.x, player.y) == 1) {
            victoryModalUpdate(avatar);
            return;
        }
        if (player.turn == 1) {
            player.turn = 2;
            avatar = player.playerDetails[1].character;
        } else {
            player.turn = 1;
            avatar = player.playerDetails[0].character;
        }
    }
    player.count++;
    if (player.count == 9) {
        drawModal();
    }
    flag = player.flag;
    turn = player.turn;
    count = player.count;
});

function show(x, y, pos) {
    player.x = x;
    player.y = y;
    player.pos = pos;
    player.count = count;
    player.flag = flag;
    player.turn = turn;
    socket.emit('playermove',player);
}