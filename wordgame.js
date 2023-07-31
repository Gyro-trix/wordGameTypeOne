

function beginClick(){
    new basicTimer(function(val) {
        var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
        document.getElementById("timer").textContent = timerMsg; 
    });
}


function basicTimer(callback, val) {
    val = val || 60; 
    var timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); 
        } 
    }, 1000);
}

// Places Timer in the "id" portion of the html 



