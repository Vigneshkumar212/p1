var opt1,opt2,opt3,opt4,opt5,opt6;
var one,two,three,four,five,six;
var background_img,bitton,name = "displayname";
var passesmade = 0
var option = "";
var play_choice = "off"
var opogamestate = "off";

function playsetup(){
    opt1 = createSprite(65,190,10,10);
    opt2 = createSprite(65,255,10,10);
    opt3 = createSprite(65,320,10,10);
    opt4 = createSprite(65,395,10,10);
    opt5 = createSprite(65,470,10,10);
    opt6 = createSprite(65,545,10,10);
    opt1.addImage("one",one);
    opt2.addImage("one",two);
    opt3.addImage("one",three);
    opt4.addImage("one",four);
    opt5.addImage("one",five);
    opt6.addImage("one",six);
}

function play(){

  fill("white")
  textStyle(BOLD);
  textSize(20)
  text("Your passes : "+passesmade,10,70);
  
  drawSprites();
  play_choice = "on";

  if (choosing_gamestate === "off"){
    text("Your Option: "+option,10,30);
    update_player_option();
  }else{
    text("Pls Choose Option",10,30);
  }
  if(chosen_number === 2){
    get_opo_option();
    opogamestate = "on"
    check();
  }
  if(opogamestate === "on"){
    text("Oponent's chose: "+opo_option,300,30);
  }


}