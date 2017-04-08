function spin() {
  
    var num = Math.floor(Math.random() * 10) + 1;  
    console.log(num);  
    if (num < 5){ 
        document.getElementById("Result").innerHTML = "Heads";
    } else {
        document.getElementById("Result").innerHTML = "Tails";
    }
}












