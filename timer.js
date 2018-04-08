


function Timer(timerText, totalTime) {
    this.timerText = timerText;
    this.totalTime = totalTime;
}

Timer.prototype.startTimer = function () {
    this.changeTimerText('timer started');
}

Timer.prototype.stopTimer = function () {
    console.log('timer stopped');
}

Timer.prototype.resetTimer = function () {
    console.log('reset timer');
}

Timer.prototype.changeTimerText = function (text) {
    this.timerText.innerHTML = text;
}