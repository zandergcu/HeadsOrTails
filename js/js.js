
function displayChoice(choice){
    document.getElementById("hide2").style.display = "block";
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
    
    
    var num = Math.floor(Math.random() * 10) + 1;  //RANDOM NUMBER 1-10
     
    if (num < 5){ 
        side = "Heads";     //1-5 HEADS
    } else {
        side = "Tails";     //6-10 TAILS
    }
    document.getElementById("Result").innerHTML = side;    //DISPLAY RESULT ON PAGE
    
    result();   //CHECK IF PLAYER WON OR LOST
}


function result(){
    document.getElementById("hide1").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("hide3").style.display = "block";
    if(choice == "Heads" && side == "Heads"){
        document.getElementById("WL").style.background = 'green';
    }
    else if(choice == "Tails" && side == "Tails"){
        document.getElementById("WL").style.background = 'green';
    }
    else{
        document.getElementById("WL").style.background = 'red';
    }
}

function playAgain(){
    location.reload();
}








