let hourInput = document.getElementById("hour");
let minuteInput = document.getElementById("minute");
let secondInput = document.getElementById("second");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let timerInterval;

startBtn.addEventListener("click", function () {
    let hours = parseInt(hourInput.value) || 0;
    let minutes = parseInt(minuteInput.value) || 0;
    let seconds = parseInt(secondInput.value) || 0;

    // Ensure hours, minutes, and seconds are not less than zero
    hours = Math.max(0, hours);
    minutes = Math.max(0, minutes);
    seconds = Math.max(0, seconds);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds > 0 && !timerInterval) {
        startTimer(totalSeconds);
    }
});

resetBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";
});

function startTimer(totalSeconds) {
    timerInterval = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            totalSeconds--;
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            hourInput.value = hours < 10 ? "0" + hours : hours;
            minuteInput.value = minutes < 10 ? "0" + minutes : minutes;
            secondInput.value = seconds < 10 ? "0" + seconds : seconds;
        }
    }, 1000);
}
