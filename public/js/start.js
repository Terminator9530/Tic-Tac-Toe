function start() {
  $('#exampleModalCenter').modal('show');
}

socket.on('launch',function(playerInfo){
  document.getElementById(`app`).appendChild(ticTacToeBoard());
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

document.getElementById("launch").onclick = function () {
  if (character1.value != "" && character2.value != "") {
    socket.emit('launch');
    socket.emit('gameplay');
  } else
    document.getElementById("showAlert").innerHTML = showErrorMessage(`Please Select Player 1, Player 2, Player Mode or Theme`);
}