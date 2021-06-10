function buttonNode(id,type,text){
    let buttonNode = document.createElement(`button`);
    buttonNode.id = id;
    buttonNode.type = `button`;
    buttonNode.classList.add(`btn`,`btn-outline-${type}`);
    let textNode = document.createTextNode(text);
    buttonNode.appendChild(textNode);
    return buttonNode;
}

function textFieldNode(name){
    let inputNode = document.createElement(`input`);
    inputNode.type = `text`;
    inputNode.placeholder = `Player ${name} Name`;
    inputNode.id = `player${name}Name`;
    return inputNode;
}

function radioButtonNode(radioName,radioValue,radioLabel){
    let outerDiv = document.createElement(`div`);
    outerDiv.classList.add(`pretty`,`p-icon`,`p-round`,`p-jelly`);
    let inputNode = document.createElement(`input`);
    inputNode.name = radioName;
    inputNode.type = `radio`;
    inputNode.value = radioValue;
    outerDiv.appendChild(inputNode);
    let innerDiv = document.createElement(`div`);
    innerDiv.classList.add(`state`,`p-danger`);
    let iNode = document.createElement(`i`);
    iNode.classList.add(`icon`,`fa`,`fa-check`);
    innerDiv.appendChild(iNode);
    let labelNode = document.createElement(`label`);
    if(radioLabel){
        let textNode = document.createTextNode(radioLabel);
        labelNode.appendChild(textNode);
    }
    innerDiv.appendChild(labelNode);
    outerDiv.appendChild(innerDiv);
    return outerDiv;
}

function imageNode(imgName,extension){
    let imageNode = document.createElement(`img`);
    imageNode.src = `./img/${imgName}.${extension}`;
    imageNode.width = "50";
    imageNode.height = "50";
    return imageNode;
}