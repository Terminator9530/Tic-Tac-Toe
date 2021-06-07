function start() {
  $('#exampleModalCenter').modal('show');
}

var socket = io.connect(window.location.hostname);

socket.on('launch',function(playerInfo){
  document.getElementById("player").style.display = "block";
    avatar = playerInfo.player1Name;
    $('#exampleModalCenter').modal('hide');
    if (playerInfo.layout == "layout1") {
      for (i = 0; i < document.querySelectorAll(".block").length; i++)
        document.querySelectorAll(".block")[i].setAttribute("style", `background-color:yellow;`);

      $(".row:nth-child(1) .block:nth-child(1)").css({
        "border-right": "2px solid white",
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(1) .block:nth-child(2)").css({
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(1) .block:nth-child(3)").css({
        "border-left": "2px solid white",
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(2) .block:nth-child(1)").css({
        "border-right": "2px solid white"
      });
      $(".row:nth-child(2) .block:nth-child(3)").css({
        "border-left": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(1)").css({
        "border-right": "2px solid white",
        "border-top": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(2)").css({
        "border-top": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(3)").css({
        "border-left": "2px solid white",
        "border-top": "2px solid white"
      });
    } else if (playerInfo.layout == "layout2") {
      for (i = 0; i < document.querySelectorAll(".block").length; i++)
        document.querySelectorAll(".block")[i].setAttribute("style", `background-color:blue;`);

      $(".row:nth-child(1) .block:nth-child(1)").css({
        "border-right": "2px solid white",
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(1) .block:nth-child(2)").css({
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(1) .block:nth-child(3)").css({
        "border-left": "2px solid white",
        "border-bottom": "2px solid white"
      });
      $(".row:nth-child(2) .block:nth-child(1)").css({
        "border-right": "2px solid white"
      });
      $(".row:nth-child(2) .block:nth-child(3)").css({
        "border-left": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(1)").css({
        "border-right": "2px solid white",
        "border-top": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(2)").css({
        "border-top": "2px solid white"
      });
      $(".row:nth-child(3) .block:nth-child(3)").css({
        "border-left": "2px solid white",
        "border-top": "2px solid white"
      });
    } else if (playerInfo.layout == "layout3") {
      for (i = 0; i < document.querySelectorAll(".block").length; i++)
        document.querySelectorAll(".block")[i].setAttribute("style", `background-color:red;`);

      $(".row:nth-child(1) .block:nth-child(1)").css({
        "border-right": "2px solid yellow",
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(1) .block:nth-child(2)").css({
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(1) .block:nth-child(3)").css({
        "border-left": "2px solid yellow",
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(2) .block:nth-child(1)").css({
        "border-right": "2px solid yellow"
      });
      $(".row:nth-child(2) .block:nth-child(3)").css({
        "border-left": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(1)").css({
        "border-right": "2px solid yellow",
        "border-top": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(2)").css({
        "border-top": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(3)").css({
        "border-left": "2px solid yellow",
        "border-top": "2px solid yellow"
      });
    } else {
      for (i = 0; i < document.querySelectorAll(".block").length; i++)
        document.querySelectorAll(".block")[i].setAttribute("style", `background-color:black;`);

      $(".row:nth-child(1) .block:nth-child(1)").css({
        "border-right": "2px solid yellow",
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(1) .block:nth-child(2)").css({
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(1) .block:nth-child(3)").css({
        "border-left": "2px solid yellow",
        "border-bottom": "2px solid yellow"
      });
      $(".row:nth-child(2) .block:nth-child(1)").css({
        "border-right": "2px solid yellow"
      });
      $(".row:nth-child(2) .block:nth-child(3)").css({
        "border-left": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(1)").css({
        "border-right": "2px solid yellow",
        "border-top": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(2)").css({
        "border-top": "2px solid yellow"
      });
      $(".row:nth-child(3) .block:nth-child(3)").css({
        "border-left": "2px solid yellow",
        "border-top": "2px solid yellow"
      });
    }
});

document.getElementById("launch").onclick = function () {
  if (gameInfo.character1 && gameInfo.character2 && gameInfo.layout) {
    // console.log(gameInfo);
    socket.emit('launch',gameInfo);
    gameInfo.flag = flag;
    gameInfo.turn = turn;
    socket.emit('gameplay',gameInfo);
  } else
    document.getElementById("showAlert").innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Please Select Player 1, Player 2 or Theme
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
}