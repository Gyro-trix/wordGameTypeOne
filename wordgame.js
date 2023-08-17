
let score = 0;
let sec = 60;
let mode = 0;
let popup = true;
let time;
let sym;
let level = 1;
let wordLength = 0;
let btn;

function initKeyboard(){
    
    const keys = [
    'Q', 'W', 'E', "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter",
    "Z", "X", "C", "V", "B", "N", "M", "Backspace"
    ];

    keys.forEach(key =>{
        let keyElement = document.getElementById(String(key)) ;

        
        switch(key){
            case "Backspace":
                console.log();
                keyElement.addEventListener("click", backspace);
            break;
            case "Enter":             
                console.log(key);
                keyElement.addEventListener("click", nextWord);
            break;
            default:
                console.log(keyElement);
                keyElement.addEventListener("click", function() {letterCreate(String(key))});
            break;
        }
    })

}



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
        btn = document.getElementById(String(sym));
        btn.setAttribute("disabled",true);
        wordLength++;
        
    } else if(wordLength === 2 && mode === 1){
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML + sym;
        btn = document.getElementById(String(sym));
        btn.setAttribute("disabled",true);
        wordLength++;
    }
  
}

function backspace(){
    if(mode === 1){
        let wString = document.getElementById("currentWord").innerHTML;
        enableButton(String(wString.charAt(wString.length - 1)));
        document.getElementById("currentWord").innerHTML = wString.slice(0,-1);
        wordLength--;
    }
}

function nextWord(){
    if(wordLength === 3 && mode === 1){
        document.getElementById("prevWord").innerHTML = document.getElementById("prevWord").innerHTML +"<br>" + document.getElementById("currentWord").innerHTML;
        document.getElementById("currentWord").innerHTML = "";
        wordLength = 0;
    }
    
}

function enableButton(letter){
    btn = document.getElementById(String(letter));
    btn.removeAttribute("disabled","");

}
   
window.addEventListener("DOMContentLoaded", initKeyboard());
