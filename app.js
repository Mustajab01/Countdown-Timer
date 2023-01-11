let start = document.getElementById("start");
let reset = document.getElementById("reset");

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

let startTimer = null;

start.addEventListener('click',startFunction);
reset.addEventListener('click',resetFunction);

function timer(){
    if (h.value == 0 && m.value ==0 && s.value==0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    }
    else if(s.value != 0){
        s.value--;
    }
    else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    }
    else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
} 

function stopTimer(){
    clearInterval(startTimer);
}

function startFunction(){
    startInterval();
}

function startInterval(){
    startTimer = setInterval(function(){timer()},1000);
}

function resetFunction(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer(); 
}