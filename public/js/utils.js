function toast(msg, type = 0) {
    return `<div id="t${ti++}" class="toast${type == 1 ? ' danger' : (type == 2 ? ' success' : '')}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type == 1 ? '#ff0000' : (type == 2 ? '#31a66a' : '#007aff')}" /></svg>
            <strong class="mr-auto">Notification</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${msg}
    </div>
    </div>`;
}

function showErrorMessage(message){
    return ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
}

function layoutCreater(backgroundcolor,borderColor){
    for (i = 0; i < document.querySelectorAll(".block").length; i++)
        document.querySelectorAll(".block")[i].setAttribute("style", `background-color:${backgroundcolor};`);

      $(".row:nth-child(1) .block:nth-child(1)").css({
        "border-right": `2px solid ${borderColor}`,
        "border-bottom": `2px solid ${borderColor}`
      });
      $(".row:nth-child(1) .block:nth-child(2)").css({
        "border-bottom": `2px solid ${borderColor}`
      });
      $(".row:nth-child(1) .block:nth-child(3)").css({
        "border-left": `2px solid ${borderColor}`,
        "border-bottom": `2px solid ${borderColor}`
      });
      $(".row:nth-child(2) .block:nth-child(1)").css({
        "border-right": `2px solid ${borderColor}`
      });
      $(".row:nth-child(2) .block:nth-child(3)").css({
        "border-left": `2px solid ${borderColor}`
      });
      $(".row:nth-child(3) .block:nth-child(1)").css({
        "border-right": `2px solid ${borderColor}`,
        "border-top": `2px solid ${borderColor}`
      });
      $(".row:nth-child(3) .block:nth-child(2)").css({
        "border-top": `2px solid ${borderColor}`
      });
      $(".row:nth-child(3) .block:nth-child(3)").css({
        "border-left": `2px solid ${borderColor}`,
        "border-top": `2px solid ${borderColor}`
      });
}

function drawModal(){
    document.getElementById("glow").classList.add("glow-blue");
    document.getElementById("vic").style.display = "none";
    document.getElementById("res").innerHTML = "Draw";
    document.getElementById("pop-up").classList.add("animate");
    document.getElementById("pop-up").style.zIndex = "4";
    document.getElementById("vic").classList.add("animateAvatar");
}

function victoryModalUpdate(avatar){
    document.getElementById("vic").src = `./img/${avatar}`;
    document.getElementById("pop-up").classList.add("animate");
    document.getElementById("pop-up").style.zIndex = "4";
    document.getElementById("vic").classList.add("animateAvatar");
    document.getElementById("glow").classList.add("glow-green");
}