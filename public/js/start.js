function start() {
  document.getElementById(`app`).appendChild(modalNode());
  player1Name = document.getElementById("player1Name");
  player1Ready = document.getElementById("player1Ready");
  character1 = document.getElementById("themeLayout").p1;

  player2Name = document.getElementById("player2Name");
  player2Ready = document.getElementById("player2Ready");
  character2 = document.getElementById("themeLayout").p2;

  mode = document.getElementById("themeLayout").m1;

  layout = document.getElementById("themeLayout").l1;

  player1Ready.addEventListener('click',function(){
    socket.emit('player1Name',{
        name : player1Name.value,
        isReady : isPlayer1Ready,
        selectedCharacter : character1.value,
        layout : layout.value,
        mode : mode.value
    });
    if(character1.value == "" || layout.value == "" || mode.value == ""){
        document.getElementById("showAlert").innerHTML = showErrorMessage(`Please Select Player 1, Player 2, Player Mode or Theme`);
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

  player2Ready.addEventListener('click',function(){
    socket.emit('player2Name',{
        name : player2Name.value,
        isReady : isPlayer2Ready,
        selectedCharacter : character2.value,
        layout : layout.value,
        mode : mode.value
    });
    if(character2.value == "" || layout.value == "" || mode.value == ""){
        document.getElementById("showAlert").innerHTML = showErrorMessage(`Please Select Player 1, Player 2, Player Mode or Theme`);
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

  document.getElementById("launch").onclick = function () {
    if (character1.value != "" && character2.value != "") {
      socket.emit('launch');
      socket.emit('gameplay');
    } else
      document.getElementById("showAlert").innerHTML = showErrorMessage(`Please Select Player 1, Player 2, Player Mode or Theme`);
  }

  $('#exampleModalCenter').modal('show');
}

socket.on('launch',function(playerInfo){
  document.getElementById(`app`).appendChild(playerNameNode());
  document.getElementById(`app`).appendChild(ticTacToeBoard());
  $(function() {
    $( "#glow" ).draggable();
  });
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  document.getElementById("player").style.display = "block";
    avatar = playerInfo.character1;
    $('#exampleModalCenter').modal('hide');
    let layout = playerInfo.layout;
    if (layout == "layout1") {
      layoutCreater('yellow','white');
    } else if (layout == "layout2") {
      layoutCreater('blue','white');
    } else if (layout == "layout3") {
      layoutCreater('red','yellow');
    } else {
      layoutCreater('black','yellow');
    }
});