var select = document.querySelector(".select");
var correctAnswer = document.querySelector(".correctAnswer");
var zero = document.querySelector(".zero");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer=document.querySelector(".quiz-container");

var startTimer
var timer
var timerCounter

//set start button and click to question//
startButton.addEventListener("click", function(){
    console.log("HELLO")
    startButton.style.display = "none";
    showQuestion()
})

function showQuestion() {
var questionText=document.createElement("p")
questionText.textContent=question[0].title
quizContainer.appendChild(questionText)

}

let question = [
    
    {
    title: "code ",
    alternatives: ["1", "2", "3", "4"],
    correctAnswer: 1
    }
]




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
    }, 1000);
}

