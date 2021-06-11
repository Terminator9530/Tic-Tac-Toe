var player1Name,player1Ready,character1,player2Name,player2Ready,character2,mode,layout;

var isPlayer1Ready = false,isPlayer2Ready = false;

socket.on('player1Name',function(playerInfo){
    // console.log("Players : ");
    // console.log(playerInfo);
    let isSelected = true;
    if(playerInfo.playerDetails[0].character == "066-Spiderman"){
        character1[0].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "063-batman"){
        character1[1].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "046-santa claus"){
        character1[2].checked = "true";
    }
    else if(playerInfo.playerDetails[0].character == "031-clown"){
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

socket.on('player2Name',function(playerInfo){
    // console.log("Players : ");
    // console.log(playerInfo);
    let isSelected = true;
    if(playerInfo.playerDetails[1].character == "016-lego"){
        character2[0].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "030-scuba diver"){
        character2[1].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "064-superman"){
        character2[2].checked = "true";
    }
    else if(playerInfo.playerDetails[1].character == "070-deadpool"){
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