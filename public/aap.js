var sec = 0;
var min = 0; 
var msec = 0;

var displaySec = 0;
var displayMin  = 0;
var displayMsec = 0;

var interval

var status = "stopped"

function timer() {
    msec++;

    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0
            min++
        }
    }
    if (msec < 10){
        displayMsec = "0" + msec.toString();
    }else {
        displayMsec = msec;
    }

    if (sec < 10){
        displaySec = "0" + sec.toString();
    }else {
        displaySec = sec;
    }

    if (min < 10){
        displayMin = "0" + min.toString();
    }else {
        displayMin = min;
    }

    document.getElementById("timer").innerHTML = displayMin + " : " + displaySec + " : " + displayMsec
}


function startStop() {
    if (status == "stopped"){
        interval = setInterval(timer , 10)
        document.getElementById("startStop").innerHTML = "Stop"
        status = "Start"

    }else {
        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start"
        status = "stopped"
    }
}

function reset() {
    clearInterval(interval)
    sec = 0;
    msec= 0;
    min = 0;
    
    document.getElementById("timer").innerHTML = "00 : 00 : 00"
    document.getElementById("startStop").innerHTML = "Start"
    status = "stopped"
    
}