var socket = io.connect('http://localhost:4000');

var player1Name = document.getElementById("player1Name");
var player1Ready = document.getElementById("player1Ready");
var character1 = document.getElementById("themeLayout").p1;

var isPlayer1Ready = false;

socket.on('player1Name',function(playerInfo){
    console.log(playerInfo);
    let isSelected = true;
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
    } else {
        console.log("Player 1 Please Select character");
        isSelected = false;
    }
    if(isSelected){
        player1Name.value = playerInfo.name;
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
        selectedCharacter : character1.value
    });
    console.log(character1);
    if(character1.value == ""){
        document.getElementById("showAlert").innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Player1 Please Select Character
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