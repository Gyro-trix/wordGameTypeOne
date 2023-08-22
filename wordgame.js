
let score = 0;
let sec = 60;
let mode = 0;
let popup = true;
let time;
let sym;
let level = 1;
let wordLength = 0;
let btn;
let src;
let comp;
/* List of valid words to check*/
const wList = [
    "DOG","CAT","COW","PIG",
    "FOX","BAT",
    "YAK"
    ];
const wWorth = [
    5,5,5,5,
    10,10,
    15
];

/* Creates event listeners for all buttons*/    
function initKeyboard(){
    
    const keys = [
    'Q', 'W', 'E', "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter",
    "Z", "X", "C", "V", "B", "N", "M", "Backspace"
    ];

    let inf = document.getElementById("info");
    let restrt = document.getElementById("restrt");
    let beg = document.getElementById("begin");
    let ply = document.getElementById("playGame");

    inf.addEventListener("click", infoPopUp);
    restrt.addEventListener("click", restart);
    beg.addEventListener("click", infoPopUp);
    beg.addEventListener("click", timer);
    ply.addEventListener("click", timer);

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
/* Compares word with word list and increments score*/
function wCheck(){
    comp = false;
    wList.forEach((wrd, index) =>{
        const ans = document.getElementById("currentWord").innerHTML;
        console.log(ans);
        const result = ans.localeCompare(wrd);
        if(result === 0){
            comp = true;
            scoreUp(wWorth[index]); 
        }
    })
    if (comp === false){
        backspace();
        backspace();
        backspace();
    }

}
/* Creates, starts, and stops the timer*/ 
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
/* Adds to the score*/
function scoreUp(src){
    if (mode == 1){
    score = score + src;
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").textContent = score;
    }
}
/* Refresh page to restart*/
function restart(){
    location.reload();
}
/* Manages mode to represent a play/pause of the game*/
function playPause(){
    if (mode == 0){
        const button = document.getElementById("playGame").innerHTML = "Pause";
    } 
    if (mode == 1){
        const button = document.getElementById("playGame").innerHTML = "Play";
    }
    
}
/* Enables/disables div popup for tutorial*/
function infoPopUp(){
    if(popup === true){
        document.getElementById("infoOver").style.visibility='hidden';
        popup = false;
    } else if (popup === false){
        document.getElementById("infoOver").style.visibility='visible';
        popup = true;
    }
}
/* Adds a letter up to three letters */
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
/* removes a character and re-enables button on keyboard*/
function backspace(){
    if(mode === 1){
        let wString = document.getElementById("currentWord").innerHTML;
        enableButton(String(wString.charAt(wString.length - 1)));
        document.getElementById("currentWord").innerHTML = wString.slice(0,-1);
        wordLength--;
        scoreUp(-1);
    }
}
/* Enter button that calls word checking*/
function nextWord(){
    
    if(wordLength === 3 && mode === 1){
        wCheck();
        if(comp === true){
        document.getElementById("prevWord").innerHTML = document.getElementById("prevWord").innerHTML +"<br>" + document.getElementById("currentWord").innerHTML;
        document.getElementById("currentWord").innerHTML = "";
        wordLength = 0;
        }
    }
    
}
/* enables a button button using ID of letter*/
function enableButton(letter){
    btn = document.getElementById(String(letter));
    btn.removeAttribute("disabled","");

}
   
window.addEventListener("DOMContentLoaded", initKeyboard());
