var player1Name = document.getElementById("player1Name");
var player1Ready = document.getElementById("player1Ready");
var character1 = document.getElementById("themeLayout").p1;

var player2Name = document.getElementById("player2Name");
var player2Ready = document.getElementById("player2Ready");
var character2 = document.getElementById("themeLayout").p2;

var isPlayer1Ready = false,isPlayer2Ready = false;

var layout = document.getElementById("themeLayout").l1;

socket.on('player1Name',function(playerInfo){
    // console.log("Players : ");
    // console.log(playerInfo);
    let isSelected = true;
    if(playerInfo.playerDetails[0].character == "066-Spiderman.png"){
        character1[0].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "063-batman.png"){
        character1[1].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "046-santa claus.png"){
        character1[2].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "031-clown.png"){
        character1[3].checked = "true";
    } 
    else {
        isSelected = false;
    }

    if(isSelected){
        player1Name.value = playerInfo.playerDetails[0].name;
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
    if(character1.value == "" || layout.value == ""){
        document.getElementById("showAlert").innerHTML = showErrorMessage();
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
    // console.log("Players : ");
    // console.log(playerInfo);
    let isSelected = true;
    if(playerInfo.playerDetails[1].character == "016-lego.png"){
        character2[0].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "030-scuba diver.png"){
        character2[1].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "064-superman.png"){
        character2[2].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "070-deadpool.png"){
        character2[3].checked = "true";
    } 
    else {
        isSelected = false;
    }

    if(isSelected){
        player2Name.value = playerInfo.playerDetails[1].name;
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
    if(character2.value == "" || layout.value == ""){
        document.getElementById("showAlert").innerHTML = showErrorMessage();
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

var tWrapper = $("#toast-wrapper"), ti = 0;
socket.on('disconnected',function(playerInfo){
    tWrapper.append(toast(`${playerInfo.disconnectedPlayer?playerInfo.disconnectedPlayer:'User'} Disconnected`,1));
    $(`#t${ti - 1}`).toast({
        delay: 2000
    });
    $(`#t${ti - 1}`).toast('show');
});

socket.on('connect',function(){
    socket.emit('connected');
});

socket.on('connected',function(){
    tWrapper.append(toast('User Connected',2));
    $(`#t${ti - 1}`).toast({
        delay: 2000
    });
    $(`#t${ti - 1}`).toast('show');
});