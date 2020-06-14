var play_button;
var playerCount = "undefined";
var welcome_state = "off";
var button_state = "on"
var choosing_gamestate = "on"
function welcomesetup(){
  play_button = createButton('play');
  play_button. position(600,300);
}
function welcome() {
    get_playerCount()
    // to show the connectng to server symbol.
    if (playerCount === "undefined"){
        play_button.hide()
        textSize(30)
        textStyle(BOLD);
        fill ("black")
        text("connecting to server...",600,300);
    } else if  (button_state === "on" ){
        play_button.show()
    }
    
    get_chosen();

    //when play button is pressed
    play_button.mousePressed(() => {
        //nessary things to change
        welcome_state = "on"
        button_state = "off"
        playerCount += 1;
        play_button.hide()

        // to update player count
       
        updateplayerCount();

        // to get this.playerid
        playerID = playerCount
        
        //to update player option
        update_player_option()
    });

}
