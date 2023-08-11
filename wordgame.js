
let score = 0;
let sec = 60;
let mode = 0;
let popup = true;
let time;
let sym;
let level = 1;
let wordLength = 0;
let btn;


function timer(){
    if (mode == 0){
        time = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(time);
        }
    }, 1000);
    playPause();
    mode = 1;
    
} else{
    playPause();
    mode = 0;
    clearInterval(time);
    
}
}

function scoreUp(){
    if (mode == 1){
    score = score + 10;
    sec = sec + 10;
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").textContent = score;
    }
}

function restart(){
    location.reload();
}

function playPause(){
    if (mode == 0){
        const button = document.getElementById("play").innerHTML = "Pause";
    } 
    if (mode == 1){
        const button = document.getElementById("play").innerHTML = "Play";
    }
    
}

function infoPopUp(){
    if(popup === true){
        document.getElementById("info").style.visibility='hidden';
        popup = false;
    } else if (popup === false){
        document.getElementById("info").style.visibility='visible';
        popup = true;
    }
}

function letterCreate(sym){
    
    if (wordLength < 2 && mode === 1){
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + sym;
        wordLength++;
        
    } else if(wordLength === 2 && mode === 1){
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + sym;
        document.getElementById("prevWord").innerHTML = document.getElementById("prevWord").innerHTML +"<br>" + document.getElementById("currentWord").innerHTML;
        document.getElementById("currentWord").innerHTML = "";
        wordLength = 0;
    }
}
    /*
    let div = document.createElement("div");
    div.id = "letter";
    div.className = "letter";
    div.style.width = "70px";
    div.style.height = "70px";
    div.style.background = "grey";
    div.style.color = "white";
    div.innerHTML = sym;
    
document.getElementById("words").appendChild(div);
*/
