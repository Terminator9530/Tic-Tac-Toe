var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var turn = 1,
    avatar = "066-Spiderman.png",
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

const allEqual = arr => arr.every(v => ((v === arr[0]) && (v !== 0)))

function hide(){
    window.location.reload(true);
}

function checkMove(x, y, turn) {
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
    console.log(temp);
    temp.forEach(element => {
        var tempFlag = [];
        for (i = 0; i < 3; i++) {
            if (element.line == "y=x")
                tempFlag.push(flag[i][i].avatar);
            if (element.line == "x=0")
                tempFlag.push(flag[i][0].avatar);
            if (element.line == "x=1")
                tempFlag.push(flag[i][1].avatar);
            if (element.line == "x=2")
                tempFlag.push(flag[i][2].avatar);
            if (element.line == "y=0")
                tempFlag.push(flag[0][i].avatar);
            if (element.line == "y=1")
                tempFlag.push(flag[1][i].avatar);
            if (element.line == "y=2")
                tempFlag.push(flag[2][i].avatar);
            if (element.line == "y=-x+2")
                tempFlag.push(flag[-i + 2][i].avatar);
        }
        console.log(tempFlag, allEqual(tempFlag));
        if (allEqual(tempFlag)) {
            canvas.style.zIndex = "3";
            console.log(element);
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

var count=0;

function show(x, y, pos) {
    if (flag[y][x].status == 0) {
        if (turn == 1) {
            document.getElementById("player").innerHTML = "Player 2 Turn";
        } else {
            document.getElementById("player").innerHTML = "Player 1 Turn";
        }
        document.querySelectorAll(".block")[pos].innerHTML = `<img class="player" src='./img/${avatar}'>`;
        flag[y][x].status = 1;
        flag[y][x].avatar = turn;
        if (checkMove(x, y, turn)){
            document.getElementById("vic").src=`./img/${avatar}`;
            document.getElementById("pop-up").classList.add("animate");
            document.getElementById("pop-up").style.zIndex="4";
            document.getElementById("vic").classList.add("animateAvatar");
            document.getElementById("glow").classList.add("glow-green");
            return ;
        }
        if (turn == 1) {
            turn = 2;
            avatar = p2;
        } else {
            turn = 1;
            avatar = p1;
        }
    }
    count++;
    if(count==9){
        document.getElementById("glow").classList.add("glow-blue");
        document.getElementById("vic").style.display="none";
        document.getElementById("res").innerHTML="Draw";
        document.getElementById("pop-up").classList.add("animate");
        document.getElementById("pop-up").style.zIndex="4";
        document.getElementById("vic").classList.add("animateAvatar");
    }
}