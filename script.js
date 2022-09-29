var select = document.querySelector(".select");
var correctAnswer = document.querySelector(".correctAnswer");
var zero = document.querySelector(".zero");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var startTimer
var timer
var timerCounter


let question = {
    title: "code ",
    alternatives: ["1", "2", "3", "4"],
    correctAnswer: 1
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textcontent = timerCount;
        if (timerCount >= 0) {
            if (iswin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer)
            loseGame();
            return;
        }
    },1000);
}

