function showAlertDivNode(){
    let divNode = document.createElement(`div`);
    divNode.id = `showAlert`;
    return divNode;
}

function layoutDivNode(){
    let divNode = document.createElement(`div`);
    divNode.id = `layout`;
    let formNode = document.createElement(`form`);
    formNode.id = `themeLayout`;
    formNode.appendChild(playerDivNode(1,[
        `066-Spiderman`,
        `063-batman`,
        `046-santa claus`,
        `031-clown`
    ],null));
    let brNode = document.createElement(`br`);
    formNode.appendChild(brNode);
    formNode.appendChild(playerDivNode(2,[
        `016-lego`,
        `030-scuba diver`,
        `064-superman`,
        `070-deadpool`
    ],null));
    brNode = document.createElement(`br`);
    formNode.appendChild(brNode);
    formNode.appendChild(themeDivNode(1,[
        `layout1`,
        `layout2`,
        `layout3`,
        `layout4`
    ],null));
    brNode = document.createElement(`br`);
    formNode.appendChild(brNode);
    formNode.appendChild(playerModeDivNode(1,[
        `spm`,
        `mpm`
    ],[
        `Single Player Mode`,
        `Multi Player Mode`
    ]));
    divNode.appendChild(formNode);
    return divNode;
}

function playerDivNode(name,avatars){
    let divNode = document.createElement(`div`);
    divNode.id = `player${name}`;
    divNode.appendChild(textFieldNode(name));
    divNode.appendChild(buttonNode(`player${name}Ready`,`success`,`Ready`));
    let brNode = document.createElement(`br`);
    divNode.appendChild(brNode);
    brNode = document.createElement(`br`);
    divNode.appendChild(brNode);
    avatars.forEach(avatar => {
        divNode.appendChild(radioButtonNode(`p${name}`,avatar,``)); 
        divNode.appendChild(imageNode(avatar));
    });
    return divNode;
}

function themeDivNode(name,layouts){
    let divNode = document.createElement(`div`);
    divNode.id = `theme`;
    let pNode = document.createElement(`p`);
    let textNode = document.createTextNode(`Layout`);
    pNode.appendChild(textNode);
    divNode.appendChild(pNode);
    layouts.forEach(layout => {
        divNode.appendChild(radioButtonNode(`l${name}`,layout,``)); 
        divNode.appendChild(imageNode(layout));
    });
    return divNode;
}

function playerModeDivNode(name,modes,labels){
    let divNode = document.createElement(`div`);
    divNode.id = `playerMode`;
    let pNode = document.createElement(`p`);
    let textNode = document.createTextNode(`Player Mode`);
    pNode.appendChild(textNode);
    divNode.appendChild(pNode);
    modes.forEach((mode,index) => {
        divNode.appendChild(radioButtonNode(`m${name}`,modes[index],labels[index]));
    });
    return divNode;
}

function modalHeader(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal-header`);
    let hNode = document.createElement(`h5`);
    hNode.classList.add(`modal-title`);
    hNode.id = `exampleModalCenterTitle`;
    let textNode = document.createTextNode(`Layout Select`);
    hNode.appendChild(textNode);
    divNode.appendChild(hNode);
    return divNode;
}

function modalBody(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal-body`);
    divNode.appendChild(showAlertDivNode());
    divNode.appendChild(layoutDivNode());
    return divNode;
}

function modalFooter(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal-footer`);
    let centerNode = document.createElement(`center`);
    let button = buttonNode(`launch`,`primary`,`Launch`);
    button.style = `position: relative;right: 190px;`;
    centerNode.appendChild(button);
    divNode.appendChild(centerNode);
    return divNode;
}

function modalContent(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal-content`);
    divNode.appendChild(modalHeader());
    divNode.appendChild(modalBody());
    divNode.appendChild(modalFooter());
    return divNode;
}

function modalDialogCentered(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal-dialog`,`modal-dialog-centered`);
    divNode.setAttribute(`role`,`document`);
    divNode.appendChild(modalContent());
    return divNode;
}

function modalNode(){
    let divNode = document.createElement(`div`);
    divNode.classList.add(`modal`,`fade`);
    divNode.id = `exampleModalCenter`;
    divNode.setAttribute(`role`,`dialog`);
    divNode.setAttribute(`data-backdrop`,`static`);
    divNode.setAttribute(`tabindex`,`-1`);
    divNode.setAttribute(`aria-labelledby`,`exampleModalCenterTitle`);
    divNode.setAttribute(`aria-hidden`,`true`);
    divNode.appendChild(modalDialogCentered());
    return divNode;
}