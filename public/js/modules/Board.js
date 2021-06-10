let noOfBlock = 0;
function ticTacToeBoard(){
    let outerDivNode,centerNode;
    outerDivNode = document.createElement(`div`);
    outerDivNode.classList.add(`board`);
    outerDivNode.id = `board`;
    for(let i = 0 ; i < 3 ; i++){
        outerDivNode.appendChild(rowDiv(i));
    }
    centerNode = document.createElement(`center`);
    centerNode.appendChild(victoryModal());
    outerDivNode.appendChild(centerNode);
    centerNode = document.createElement(`center`);
    centerNode.style = `height:0px;`;
    let canvasNode = document.createElement(`canvas`);
    canvasNode.id = `canvas`;
    canvasNode.width = `600`;
    canvasNode.height = `600`;
    centerNode.appendChild(canvasNode);
    outerDivNode.appendChild(centerNode);
    return outerDivNode;
}

function victoryModal(){
    let outerDivNode = document.createElement(`div`);
    outerDivNode.id = `pop-up`;
    let innerDivNode = document.createElement(`div`);
    innerDivNode.classList.add(`container1`);
    innerDivNode.id = `glow`;
    let hNode = document.createElement(`h1`);
    hNode.id = `res`;
    let textNode = document.createTextNode(`Victory`);
    hNode.appendChild(textNode);
    innerDivNode.appendChild(hNode);
    let imgNode = document.createElement(`img`);
    imgNode.id = `vic`;
    imgNode.style = `width:50px;height:50px;border-radius:0;margin:0;`;
    innerDivNode.appendChild(imgNode);
    let divNode = document.createElement(`div`);
    divNode.classList.add(`cross`);
    divNode.onclick = function(){
        hide();
    };
    let iNode = document.createElement(`i`);
    iNode.classList.add(`fa`,`fa-times`);
    divNode.appendChild(iNode);
    innerDivNode.appendChild(divNode);
    outerDivNode.appendChild(innerDivNode);
    return outerDivNode;
}

function rowDiv(i){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`row`);
    for(let j = 0 ; j < 3 ; j++){
        divNode.appendChild(blockDiv(j,i,noOfBlock++));
    }
    return divNode;
}

function blockDiv(x,y,pos){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`block`);
    divNode.onclick = function(){
        show(x,y,pos);
    }
    return divNode;
}