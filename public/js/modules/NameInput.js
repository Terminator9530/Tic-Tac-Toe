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
    let startButtonNode = document.createElement(`button`);
    startButtonNode.id = `start`;
    startButtonNode.type = `button`;
    startButtonNode.onclick = function(){
        $('#exampleModalCenter').modal('show');
        document.getElementById(`board`).style.display = ``;
        document.getElementById(`app`).removeChild(centerNode);
    }
    startButtonNode.classList.add(`btn`,`btn-outline-primary`);
    let textNode = document.createTextNode(`START`);
    startButtonNode.appendChild(textNode);
    formNode.appendChild(inputTextNode);
    formNode.appendChild(startButtonNode);
    divNode.appendChild(formNode);
    centerNode.appendChild(divNode);
    return centerNode;
}