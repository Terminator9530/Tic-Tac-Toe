
function start(){
    $('#exampleModalCenter').modal('show');
}

var p1,p2,l1;

document.getElementById("launch").onclick = function () {
    p1 = document.getElementById("themeLayout").p1.value;
    p2 = document.getElementById("themeLayout").p2.value;
    l1 = document.getElementById("themeLayout").l1.value;
    if (p1 && p2 && l1) {
        avatar=p1;
        $('#exampleModalCenter').modal('hide');
        console.log(p1, p2, l1);
    } else
        document.getElementById("showAlert").innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Please Select Player 1, Player 2 or Theme
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
}