function start() {
  $('#exampleModalCenter').modal('show');
}

var socket = io.connect(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/`);

socket.on('launch',function(playerInfo){
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
    document.getElementById("showAlert").innerHTML = showErrorMessage();
}