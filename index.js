var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var startTime,
elapsedTime = 0,
timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        
        timer.textContent = formatTime(elapsedTime);
    }, 10);
    
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timeInterval);


    startButton.disabled = false;
    stopButton.disabled = true;

}

function resetTimer() {
     
    clearInterval(timerInterval);
    
    elapsedTime = 0;
    timer.textContent = "00:00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
}

function formatTime(time) {
    var hours = Math.floor(time / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds =  Math.floor((time % (1000 * 60)) / 1000);
    var milliseconds = math.floor((time % 1000) / 10);

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);