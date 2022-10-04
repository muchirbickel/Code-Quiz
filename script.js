var select = document.querySelector(".select");
var correctAnswer = document.querySelector(".correctAnswer");
var zero = document.querySelector(".zero");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".button");
var quizContainer=document.querySelector(".quiz-container");

var header = document.querySelector("#header");
var time = document.querySelector("#time");
var finalScore = document.querySelector("#final-score");
var inputField = document.getElementById("initial");
var quizIntro = document.querySelector("#quiz-intro");
var firstQuestion = document.querySelector("#question1");
var secondQuestion = document.querySelector("#question2");
var thirdQuestion = document.querySelector("#question3");
var fourthQuestion = document.querySelector("#question4");
var fifthQuestion = document.querySelector("#question5");
var enterInitials = document.querySelector("#enter-initials");
var highScore = document.querySelector("#display-highScore");

var timer=20;

//set start button and click to question//
startButton.addEventListener("click", function(){
    console.log("click start button")
    startButton.style.display = "none";
    quizIntro.style.display = "none";
    showQuestion()
})

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      time.textContent = "Time: "+timer;
  
      if(timer === 0 || questions === 5) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

document.addEventListener("click", function(event){
    var child = event.target;
    if(child.matches("#start-quiz")){
        setTime();
        quizChallenge.setAttribute("style", "display: none;");
        firstQuestion.setAttribute("style", "display: flex;");
        console.log("displaying first question");
    }
    if(child.matches(".question1")){
        console.log("first answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        firstQuestion.setAttribute("style", "display:none;");
        secondQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".question2")){
        console.log("second answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        secondQuestion.setAttribute("style", "display:none;");
        thirdQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".question3")){
        console.log("third answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        thirdQuestion.setAttribute("style", "display:none;");
        fourthQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".question4")){
        console.log("fourth answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        fourthQuestion.setAttribute("style", "display:none;");
        fifthQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".question5")){
        console.log("fifth answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        fifthQuestion.setAttribute("style", "display:none;");
        enterInitials.setAttribute("style", "display:flex;");
        finalScore.textContent = "Your final score is "+ score;
    }
    if(child.matches("#submit")){
        console.log("submit button clicked");
        var value = inputField.value;
        localStorage.setItem("initial", value);
        localStorage.setItem("score", score);
        enterInitials.setAttribute("style", "display:none;");
        header.setAttribute("style", "display:none;");
        highScore.setAttribute("style", "display:flex;");
    }
    if(child.matches("#go-back")){
        timer = 70;
        questions = 0;
        score = 0;
        highScore.setAttribute("style", "display:none;");
        quizChallenge.setAttribute("style", "display:flex;");
    }

});
