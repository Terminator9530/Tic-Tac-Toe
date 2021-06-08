function start() {
  $('#exampleModalCenter').modal('show');
}

var socket = io.connect(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/`);

socket.on('launch',function(playerInfo){
  document.getElementById("player").style.display = "block";
    avatar = playerInfo.character1;
    $('#exampleModalCenter').modal('hide');
    if (playerInfo.layout == "layout1") {
      layoutCreater('yellow','white');
    } else if (playerInfo.layout == "layout2") {
      layoutCreater('blue','white');
    } else if (playerInfo.layout == "layout3") {
      layoutCreater('red','yellow');
    } else {
      layoutCreater('black','yellow');
    }
});

document.getElementById("launch").onclick = function () {
  if (gameInfo.character1 && gameInfo.character2 && gameInfo.layout) {
    socket.emit('launch',gameInfo);
    gameInfo.flag = flag;
    gameInfo.turn = turn;
    socket.emit('gameplay',gameInfo);
  } else
    document.getElementById("showAlert").innerHTML = showErrorMessage();
}