


function displayChoice(choice){
    if (choice == "h"){
        document.getElementById("choice").innerHTML = "Heads";
    }
    else if (choice == "t"){
        document.getElementById("choice").innerHTML = "Tails";
    }
    else {
        document.getElementById("choice").innerHTML = "";
    }
}


function preSpin() {        //LOCK IN THE USERS ANSWER
    
    var isHeads = document.getElementById("Heads").checked;  //RETURN TRUE FOR SELECTED RADIO OPTION
    var isTails = document.getElementById("Tails").checked;
    
    if (isHeads){
        choice = "Heads";
    }
    else if (isTails){
        choice = "Tails";
    }
    else {
        console.log("error1"); //IF NO CHOICE DISPLAY ERROR
    }
    spin(choice);    //SPIN COIN WITH USERS OPTION LOCKED IN
}


function spin(){
    console.log(choice);
    var num = Math.floor(Math.random() * 10) + 1;  //RANDOM NUMBER 1-10
    console.log(num);  
    if (num < 5){ 
        side = "Heads";     //1-5 HEADS
    } else {
        side = "Tails";     //6-10 TAILS
    }
    document.getElementById("Result").innerHTML = side;    //DISPLAY RESULT ON PAGE
    
    result();   //CHECK IF PLAYER WON OR LOST
}


//CANT GET choice TO HERE. SO THE ELSE KEEPS GETTING TRIGGERED. HELPPPP. SOMETHING TO DO WITH .CHECKED AT TOP.

function result(){
    if(choice == "Heads" && side == "Heads"){
        console.log("Winner Winner Chicken Dinner!");
    }
    else if(choice == "Tails" && side == "Tails"){
        console.log("Winner Winner Chicken Dinner!");
    }
    else{
        console.log("Ouch!");
    }
}










