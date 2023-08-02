var score = 0;
var val = 0;
var gameState = 0; //Prevents starting of a new timer
var timerMsg = "00:00";
var timer;

//Starts Score displayed as Zero
document.getElementById("score").textContent = score;
//Starts timer at zero
document.getElementById("timer").textContent = timerMsg;

function beginClick(){
    if (gameState == 0){
        new basicTimer(function(val) {
            timerMsg = "00:" + (val >= 10 ? val : "0" + val);
            document.getElementById("timer").textContent = timerMsg; 
        });
        gameState = 1;
    } else if(gameState == 1){
            clearInterval(timer);
            gameState = 0;
        } 
    }


function scoreUp(){
    score = score + 10;
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").textContent = score;
}

function basicTimer(callback, val) {
    val = val || 60; 
    timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); //Stops timer at zero
        } 
    }, 1000);
}





// Places Timer in the "id" portion of the html 



