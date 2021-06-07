var socket = io.connect('http://localhost:4000');

var player1Name = document.getElementById("player1Name");
var player1Ready = document.getElementById("player1Ready");
var character1 = document.getElementById("themeLayout").p1;

var player2Name = document.getElementById("player2Name");
var player2Ready = document.getElementById("player2Ready");
var character2 = document.getElementById("themeLayout").p2;

var isPlayer1Ready = false,isPlayer2Ready = false;

var layout = document.getElementById("themeLayout").l1;

var gameInfo = {
    player1Name : "",
    player2Name : "",
    character1 : "",
    character2 : "",
    layout : ""
};

socket.on('player1Name',function(playerInfo){
    //console.log(playerInfo);
    let isSelected = true;
    gameInfo.character1 = playerInfo.selectedCharacter;
    if(playerInfo.selectedCharacter == "066-Spiderman.png"){
        character1[0].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "063-batman.png"){
        character1[1].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "046-santa claus.png"){
        character1[2].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "031-clown.png"){
        character1[3].checked = "true";
    } 
    else {
        //console.log("Player 1 Please Select character");
        isSelected = false;
    }

    gameInfo.layout = playerInfo.layout;

    if(playerInfo.layout == "layout1"){
        layout[0].checked = true;
    }
    else if(playerInfo.layout == "layout2"){
        layout[1].checked = true;
    }
    else if(playerInfo.layout == "layout3"){
        layout[2].checked = true;
    }
    else if(playerInfo.layout == "layout4"){
        layout[3].checked = true;
    }
    else{
        isSelected = false;
    }

    if(isSelected){
        player1Name.value = playerInfo.name;
        gameInfo.player1Name = player1Name.value;
        if(!playerInfo.isReady){
            //ready
            player1Ready.innerHTML = "Not Ready";
            player1Ready.classList.add("btn-outline-danger");
            player1Ready.classList.remove("btn-outline-success");
        } else {
            //not ready
            player1Ready.innerHTML = "Ready";
            player1Ready.classList.add("btn-outline-success");
            player1Ready.classList.remove("btn-outline-danger");
        }
    }
});

player1Ready.addEventListener('click',function(){
    socket.emit('player1Name',{
        name : player1Name.value,
        isReady : isPlayer1Ready,
        selectedCharacter : character1.value,
        layout : layout.value
    });
    //console.log(character1);
    if(character1.value == "" || layout.value == ""){
        document.getElementById("showAlert").innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Player1 Please Select Character or Layout
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
    } else {
        if(!isPlayer1Ready){
            //ready
            player1Ready.innerHTML = "Not Ready";
            isPlayer1Ready = true;
            player1Ready.classList.add("btn-outline-danger");
            player1Ready.classList.remove("btn-outline-success");
        } else {
            //not ready
            player1Ready.innerHTML = "Ready";
            isPlayer1Ready = false;
            player1Ready.classList.add("btn-outline-success");
            player1Ready.classList.remove("btn-outline-danger");
        }
    }
});

socket.on('player2Name',function(playerInfo){
    //console.log(playerInfo);
    let isSelected = true;
    gameInfo.character2 = playerInfo.selectedCharacter;
    if(playerInfo.selectedCharacter == "016-lego.png"){
        character2[0].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "030-scuba diver.png"){
        character2[1].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "064-superman.png"){
        character2[2].checked = "true";
    }
    else if(playerInfo.selectedCharacter == "070-deadpool.png"){
        character2[3].checked = "true";
    } 
    else {
        //console.log("Player 2 Please Select character");
        isSelected = false;
    }
    gameInfo.layout = playerInfo.layout;
    if(playerInfo.layout == "layout1"){
        layout[0].checked = true;
    }
    else if(playerInfo.layout == "layout2"){
        layout[1].checked = true;
    }
    else if(playerInfo.layout == "layout3"){
        layout[2].checked = true;
    }
    else if(playerInfo.layout == "layout4"){
        layout[3].checked = true;
    }
    else{
        isSelected = false;
    }

    if(isSelected){
        player2Name.value = playerInfo.name;
        gameInfo.player2Name = player2Name.value;
        if(!playerInfo.isReady){
            //ready
            player2Ready.innerHTML = "Not Ready";
            player2Ready.classList.add("btn-outline-danger");
            player2Ready.classList.remove("btn-outline-success");
        } else {
            //not ready
            player2Ready.innerHTML = "Ready";
            player2Ready.classList.add("btn-outline-success");
            player2Ready.classList.remove("btn-outline-danger");
        }
    }
});

player2Ready.addEventListener('click',function(){
    socket.emit('player2Name',{
        name : player2Name.value,
        isReady : isPlayer2Ready,
        selectedCharacter : character2.value,
        layout : layout.value
    });
    //console.log(character2);
    if(character2.value == "" || layout.value == ""){
        document.getElementById("showAlert").innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Player2 Please Select Character or Layout
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
    } else {
        if(!isPlayer2Ready){
            //ready
            player2Ready.innerHTML = "Not Ready";
            isPlayer2Ready = true;
            player2Ready.classList.add("btn-outline-danger");
            player2Ready.classList.remove("btn-outline-success");
        } else {
            //not ready
            player2Ready.innerHTML = "Ready";
            isPlayer2Ready = false;
            player2Ready.classList.add("btn-outline-success");
            player2Ready.classList.remove("btn-outline-danger");
        }
    }
});