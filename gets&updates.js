var opo_option;
var chosen_number = 0;
function update_player_option(){
    var playerno = "/playezs/player"+ playerID
    database.ref(playerno).update({
      option:option,
      ballwith :"null"
    });
  }
function get_playerCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
        playerCount = data.val();
    }); 
} 

function get_opo_option(){
    if (playerID === 1){
      var opopath = "/playezs/player2/option"
    }

    if (playerID === 2){
      var opopath = "/playezs/player1/option"
    }
    var opooptRef = database.ref(opopath);
    opooptRef.on("value", (data) => {
        opo_option = data.val();
    }); 
} 

function get_chosen(){
    
    var chosen_numberRef = database.ref('chosen');
    chosen_numberRef.on("value", (data) => {
        chosen_number = data.val();
    }); 
}

function update_Chosen(){
    chosen_number+=1
    database.ref("/").update({
        chosen:chosen_number
    });
}

function updateplayerCount(){
    database.ref("/").update({
      playerCount:playerCount
    });
}