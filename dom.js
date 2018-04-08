
var timer;


function onStartClick() {
    
    var startButton = document.getElementById("start");

    var timerText = document.getElementById("timerText");
    
    timer = new Timer(timerText, 1000);

    timer.startTimer();
    
}

function onStopClick() {

    if (timer === undefined) {
        
        showWarningMessage('First start the time, you asshole!!')
        
        return;
    
    }
    var stopButton = document.getElementById("stop");

    var timerText = document.getElementById("timerText");

    stopButton.onclick = timer.stopTimer();

}

function onResetClick() {

    if (timer === undefined) {
        
        showWarningMessage('First start the time, you asshole!!')
        
        return;
    
    }

    var resetButton = document.getElementById("reset");

    var timerText = document.getElementById("timerText");

    resetButton.onclick = timer.resetTimer();

}

function showWarningMessage(warning){
    
    var timerText = document.getElementById("timerText");
    
    timerText.innerHTML = warning;
}