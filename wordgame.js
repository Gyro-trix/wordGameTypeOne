var score = 0;
var sec = 60;
var mode = 0;
var time;

document.getElementById("score").textContent = score;

function timer(){
    if (mode == 0){
    time = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(time);
        }
    }, 1000);
    mode = 1;
} else{
    mode = 0;
    clearInterval(time);
    
}
}

function scoreUp(){
    score = score + 10;
    sec = sec + 10;
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").textContent = score;
}




