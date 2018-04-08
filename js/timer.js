


function Timer(timerText, totalTime) {
    this.timerText = timerText;
    this.totalTime = totalTime;
    this.ticker = undefined;
}

Timer.prototype.startTimer = function () {

    var totalTime = this.totalTime;

    // save setInterval id in ticker, so we can later stop it.
    this.ticker = setInterval(this.tickerAction.bind(this), 1000);
}

Timer.prototype.stopTimer = function () {

    if (this.ticker === undefined) {
        return false;
    }
    // get the id of the running setinterval and stop it.

    clearInterval(this.ticker);
    this.ticker = undefined;

    return true;
}

Timer.prototype.resetTimer = function () {
    this.stopTimer();
    this.changeTimerText('Timer Reseted');
}

Timer.prototype.tickerAction = function () {
    this.changeTimerText(this.formatSeconds(this.totalTime));
    if (this.totalTime == 0) {
        clearInterval(this.ticker);
    }
    this.totalTime--;
}

Timer.prototype.formatSeconds = function (seconds) {

    var hours = Math.floor(seconds / (60 * 60));

    var minutes = Math.floor((seconds / 60)%60);

    var seconds = seconds % 60;

    return (hours < 10 ? '0' + hours : hours) + ":" 
    + (minutes < 10 ? '0' + minutes : minutes) 
    + ":" + (seconds<10 ? '0' + seconds : seconds);
}

Timer.prototype.changeTimerText = function (text) {
    this.timerText.innerHTML = text;
}
