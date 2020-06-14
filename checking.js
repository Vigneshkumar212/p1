var time = "passtime"
function check(){
    if (time === "passtime"&& option === "four"){
        time = "goaltime";
    }
    if (time === "passtime"&& option === "five"){
        time = "goaltime";
    }
    if (time === "passtime"&& option === "six"){
        time = "goaltime";
    }
    if (option !== opo_option){
        console.log("noo...:(");
        passesmade = 0;
        chosen_number = -1;
        update_Chosen();
     }
    if (option === opo_option){
        passesmade +=1;
        chosen_number = -1;
        update_Chosen();
        console.log("nope")
    }

}