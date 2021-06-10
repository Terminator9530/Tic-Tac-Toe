module.exports = class Players{
    constructor(){
        this.playerDetails = [];
        this.turn = 1;
        this.flag = [
            [{
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }],
            [{
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }],
            [{
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }, {
                status: 0,
                avatar: 0
            }]
        ];
        this.count = 0;
    }

    playerMove(x,y,pos){
        this.x = x;
        this.y = y;
        this.pos = pos;
    }

    addPlayer(id,name,character,layout,isPlayerReady,isHost,mode){
        let playerInfo = {};
        if(id != null){
            playerInfo.id = id;
        }
        if(name != null){
            playerInfo.name = name;
        }
        if(character != null){
            playerInfo.character = character;
        }
        if(layout != null){
            playerInfo.layout = layout;
        }
        if(isPlayerReady != null){
            playerInfo.isPlayerReady = isPlayerReady;
        }
        if(isHost != null){
            playerInfo.isHost = isHost;
        }
        if(mode != null){
            playerInfo.mode = mode;
        }
        this.playerDetails.push(playerInfo);
    }

    updatePlayer(id,name,character,layout,isPlayerReady,isHost,playerNo,mode){
        if(id != null){
            this.playerDetails[playerNo].id = id;
        }
        if(name != null){
            this.playerDetails[playerNo].name = name;
        }
        if(character != null){
            this.playerDetails[playerNo].character = character;
        }
        if(layout != null){
            this.playerDetails[playerNo].layout = layout;
        }
        if(isPlayerReady != null){
            this.playerDetails[playerNo].isPlayerReady = isPlayerReady;
        }
        if(isHost != null){
            this.playerDetails[playerNo].isHost = isHost;
        }
        if(mode != null){
            this.playerDetails[playerNo].mode = mode;
        }
    }

    deletePlayer(id){
        this.playerDetails = this.playerDetails.filter((value)=>{
            return value.id !== id;
        });
    }

    findPlayerName(turn){
        if(turn === 1){
            return this.playerDetails[0].name;
        } else {
            return this.playerDetails[1].name;
        }
    }

    findPlayerId(turn){
        if(turn === 1){
            return this.playerDetails[0].id;
        } else {
            return this.playerDetails[1].id;
        }
    }

    findPlayerCharacter(turn){
        if(turn === 1){
            return this.playerDetails[0].character;
        } else {
            return this.playerDetails[1].character;
        }
    }

    findPlayerReadyStatus(turn){
        if(turn === 1){
            return this.playerDetails[0].isPlayerReady;
        } else {
            return this.playerDetails[1].isPlayerReady;
        }
    }

    findPlayerLayout(turn){
        if(turn === 1){
            return this.playerDetails[0].layout;
        } else {
            return this.playerDetails[1].layout;
        }
    }

    layoutChooser(){
        let layouts = [],layout1,layout2;
        layout1 = this.playerDetails[0].layout;
        layout2 = this.playerDetails[1].layout;
        layouts.push(layout1);
        layouts.push(layout2);
        return layouts[Math.floor(Math.random() * layouts.length)];
    }

    modeChooser(){
        let modes = [],mode1,mode2;
        mode1 = this.playerDetails[0].mode;
        mode2 = this.playerDetails[1].mode;
        modes.push(mode1);
        modes.push(mode2);
        return modes[Math.floor(Math.random() * modes.length)];
    }

    makeHost(){

    }

    say(){
        console.log("Hello");
    }
}