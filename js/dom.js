
var timer;


function onStartClick() {

    var startButton = document.getElementById("start");

    var timerText = document.getElementById("timerText");

    var totalTime = document.getElementById("totalTime").value;

    if(timer !== undefined) {
        timer.stopTimer();
    }
    timer = new Timer(timerText, totalTime);

    timer.startTimer();

}

function onStopClick() {

    if (timer === undefined) {

        showWarningMessage('First start the time, you asshole!!')

        return;

    }
    timer.stopTimer();

}

function onResetClick() {

    if (timer === undefined) {
        showWarningMessage('First start the time, you asshole!!')
        return;
    }
    timer.resetTimer();

}

function showWarningMessage(warning) {

    var timerText = document.getElementById("timerText");

    timerText.innerHTML = warning;
}