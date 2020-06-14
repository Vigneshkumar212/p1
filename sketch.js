var database;
var playerID;
var choosing_gamestate;

function preload(){
  one = loadImage('one.png');
  two = loadImage('two.png');
  three = loadImage('three.png');
  four = loadImage('four.png');
  five= loadImage('five.png');
  six= loadImage('six.png');
  optbarimg = loadImage ('options.png');
  background_img = loadImage('background_img.png');
  
}

function setup(){
  canvas = createCanvas(1200,600);
  playsetup();
  welcomesetup();
    // reffering the database  
    database = firebase.database();
    if(chosen_number === 2){
      
    }
}


function draw(){
  background(background_img);

  //calling play function once conection is connected to the server
  if (playerCount !== "undefined"&&welcome_state === "on"&& playerCount === 2){play();}
  if (playerCount !== "undefined"&&welcome_state === "on"){
  
  /*database.ref('/').update({
    playerCount: playerCount
  });*/
   
  }
  // to show waiting symbol
  if (playerCount !== "undefined"&&welcome_state === "on"&& playerCount<2){text("waiting for oponent",200,300)}

  //calling the welcome function which contains the froont screen
  welcome();
  
}

function mouseReleased(){
  if(play_choice === "on"){
    if (mouseX>16&&mouseX<118&&mouseY>145&&mouseY<196&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "one";
    }
    if (mouseX>16&&mouseX<118&&mouseY>220&&mouseY<270&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "two";
    }
    if (mouseX>16&&mouseX<118&&mouseY>296&&mouseY<347&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "three";
    }
    if (mouseX>16&&mouseX<118&&mouseY>372&&mouseY<422&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "four";
    }
    if (mouseX>16&&mouseX<118&&mouseY>446&&mouseY<496&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "five";
    }
    if (mouseX>16&&mouseX<118&&mouseY>520&&mouseY<572&&choosing_gamestate === "on"){
     choosing_gamestate = "off"
     update_Chosen();
      option = "six";
    }
  }
}

