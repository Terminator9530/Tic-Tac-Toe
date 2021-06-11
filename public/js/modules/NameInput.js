function nameInputPanel(){
    let divNode = document.createElement(`div`);
    divNode.id = `nameInputPanel`;
    divNode.classList.add(`nameInputPanel`);
    let headingtextNode = document.createTextNode(`TIC TAC TOE`);
    let pNode = document.createElement(`p`);
    let bNode = document.createElement(`b`);
    bNode.classList.add(`heading`);
    bNode.appendChild(pNode);
    pNode.appendChild(headingtextNode);
    let formNode = document.createElement(`form`);
    formNode.classList.add(`nameForm`);
    let inputTextNode = document.createElement(`input`);
    inputTextNode.id = `playerName`;
    inputTextNode.type = `text`;
    inputTextNode.placeholder = `Enter Your Name`;
    inputTextNode.classList.add(`form-control`);
    let centerNode = document.createElement(`center`);
    let brNode = document.createElement(`br`);
    formNode.appendChild(brNode);
    formNode.appendChild(bNode);
    formNode.appendChild(inputTextNode);
    formNode.appendChild(joinRoomButton());
    brNode = document.createElement(`br`);
    formNode.appendChild(brNode);
    formNode.appendChild(createRoomButton());
    divNode.appendChild(formNode);
    centerNode.appendChild(divNode);
    return centerNode;
}

function joinRoomButton(){
    let buttonNode = document.createElement(`button`);
    buttonNode.id = `joinRoom`;
    buttonNode.type = `button`;
    buttonNode.onclick = function(){
        $('#exampleModalCenter').modal('show');
        document.getElementById(`board`).style.display = ``;
        document.getElementById(`app`).removeChild(centerNode);
    }
    buttonNode.classList.add(`btn`,`btn-success`);
    let textNode = document.createTextNode(`Join Room`);
    buttonNode.appendChild(textNode);
    return buttonNode;
}

function createRoomButton(){
    let buttonNode = document.createElement(`button`);
    buttonNode.id = `createRoom`;
    buttonNode.type = `button`;
    buttonNode.classList.add(`btn`,`btn-info`);
    let textNode = document.createTextNode(`Create Room`);
    buttonNode.appendChild(textNode);
    return buttonNode;
}

// document.body.appendChild(nameInputPanel());
// $(function() {
//     $( "#nameInputPanel" ).draggable();
// });